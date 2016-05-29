package com.isn.util;

import java.security.Principal;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Utility methods for working with Spring Security.
 */
public class SecurityUtil {

    public static String getLoggedInUser() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication auth;
        Principal principal = null;
        if (securityContext != null) {
            auth = securityContext.getAuthentication();
            if (auth != null) {
            	 principal = (Principal) auth.getPrincipal();
                
            }
        }
        return principal.getName();
    }

  
}
