package com.sunbeam.Security;

import jakarta.persistence.Column;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@AllArgsConstructor
@Slf4j
public class CustomJWTFilter extends OncePerRequestFilter {
    private final JwtUtils jwtUtils;
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String headerValue = request.getHeader("Authorization");
        if(headerValue != null && headerValue.startsWith("Bearer ")) {
            String jwt = headerValue.substring(7);
            log.info("JWT in request: {} ",jwt);
            Authentication authentication
                    = jwtUtils.populateAuthencationTokenFromJWT(jwt);
            System.out.println("auth object from JWT{} "+authentication);

            SecurityContextHolder
                    .getContext()
                    .setAuthentication(authentication);
        }

        filterChain.doFilter(request,response);

    }
}
