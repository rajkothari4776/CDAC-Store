package com.sunbeam.Security;

import com.sunbeam.entity.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.security.Keys;


import javax.crypto.SecretKey;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Slf4j
public class JwtUtils {
    @Value("${SECRET_KEY}")
    private String jwtSecret;

    @Value("${EXP_TIMEOUT}")
    private int jwtExpirationMs;

    private SecretKey key;

    @PostConstruct
    public void init(){
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    public String generateJwtToken(Authentication authentication){
        log.info("generateJwtToken");
        UserEntity userPrincipal = (UserEntity) authentication.getPrincipal();
        return Jwts.builder()
                .subject((""+userPrincipal.getId()))
                .issuedAt(new Date())
                .expiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .claim("authorities", getAuthoritiesInString(userPrincipal.getAuthorities()))
                .signWith(key, Jwts.SIG.HS256)
                .compact();

    }
    public String getUserNameFromJwtToken(Claims claims) {
        return claims.getSubject();
    }

    public Claims validateJwtToken(String jwtToken){
        Claims claims = Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(jwtToken)
                .getPayload();

        return claims;
    }

    private List<String> getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
    }

    public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {

        List<String> authorityNamesFromJwt = (List<String>) claims.get("authorities");
        List<GrantedAuthority> authorities = authorityNamesFromJwt.stream().map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

        authorities.forEach(System.out::println);
        return authorities;
    }

    public Authentication populateAuthencationTokenFromJWT(String jwt){
        Claims payloadClaims = validateJwtToken(jwt);
        String email = getUserNameFromJwtToken(payloadClaims);
        List<GrantedAuthority> authorities = getAuthoritiesFromClaims(payloadClaims);
        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(email, null, authorities);

        System.out.println("is authenticated: " + token.isAuthenticated());
        return token;
    }
}
