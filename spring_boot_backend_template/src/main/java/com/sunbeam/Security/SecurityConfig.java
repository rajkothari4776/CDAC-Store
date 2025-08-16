package com.sunbeam.Security;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@AllArgsConstructor
public class SecurityConfig {
    private final CustomUserDetailsServiceImpl customUserDetailsServiceImpl;
    private final PasswordEncoder passwordEncoder;
    private final CustomJWTFilter customJWTFilter;
    private JwtAuthEntryPoint jwtAuthEntryPoint;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{

        http.cors(cors -> cors.configurationSource(request -> {
            var corsConfig = new org.springframework.web.cors.CorsConfiguration();
            corsConfig.setAllowedOrigins(List.of("http://localhost:5173")); // frontend URL (removed trailing slash)
            corsConfig.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
            corsConfig.setAllowedHeaders(List.of("Authorization", "Content-Type"));
            corsConfig.setAllowCredentials(true);
            return corsConfig;
        }));

        http.csrf(csrf -> csrf.disable());
        http.authorizeHttpRequests(
                request ->request
                        .requestMatchers("/swagger-ui/**","/swagger-ui/index.html",
                                "/v3/api-docs/**",
                                "/user/login", "/programmer/signup", "/client/signup", "/programmer/signup")
                        .permitAll()
                        .requestMatchers("/programmer/**").hasRole("PROGRAMMER")
                        .requestMatchers("/client/**").hasRole("CLIENT")
                        .anyRequest().authenticated()
        );
        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.exceptionHandling(ex -> ex.authenticationEntryPoint(new JwtAuthEntryPoint()));

        http.addFilterBefore(customJWTFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
        return config.getAuthenticationManager();
    }
}
