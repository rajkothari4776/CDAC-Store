package com.sunbeam.ExceptionHandler;


import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.customExceptions.AuthenticationFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(AuthenticationFailureException.class)
    public ResponseEntity<?> handleAuthenticationFailureException(AuthenticationFailureException e){
        System.out.println("in catch -- invalid authentication");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new ApiResponse(e.getMessage()));
    }
}
