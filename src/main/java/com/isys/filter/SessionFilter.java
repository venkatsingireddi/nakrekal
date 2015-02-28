package com.isys.filter;
import java.io.IOException;
import java.util.Date;
 


import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
 
public class SessionFilter implements Filter {
 
    public void doFilter(ServletRequest req, ServletResponse res,
            FilterChain chain) throws IOException, ServletException {
 
    	HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
         
        //Get the IP address of client machine.
        String ipAddress = request.getRemoteAddr();
         
        //Log the IP address and current timestamp.
        System.out.println("IP "+ipAddress + ", Time " + new Date().toString());
        
        String uri = request.getRequestURI();
        System.out.println("Requested Resource::"+uri);
         //&& !(uri.endsWith("html") || uri.endsWith("LoginServlet"))
        HttpSession session =  request.getSession(false);
        
        System.out.println(" Session interval "+session.getMaxInactiveInterval());
        chain.doFilter(req, res);
       /* if(session == null ){
        	System.out.println("Session Expired at :"+new Date());
            response.sendRedirect("/");
        }
        else{
            // pass the request along the filter chain
        	
        }*/
        
    }
    public void init(FilterConfig config) throws ServletException {
         
        //Get init parameter
        String testParam = config.getInitParameter("param-session");
         
        //Print the init parameter
        System.out.println("Param-Session: " + testParam);
    }
    public void destroy() {
        //add code to release any resource
    }
}
