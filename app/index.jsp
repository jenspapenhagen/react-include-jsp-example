<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>include react componente into JSP</title>
    <script type="module" crossorigin src="./assets/index-b8kMnBYi.js"></script>
    <link rel="stylesheet" crossorigin href="./assets/index-D1ddMlpR.css">
  </head>
  <body>

<h1>It works!</h1>
<!-- JSP with a example JSTL -->
<c:forEach var="j" begin="0" end="5">  
  <p>Hello, world! <c:out value="${j}"/> </p>
</c:forEach> 

<p> React Component (full react expedients with Hook): </p>
	<div id="button-test"></div>
  </body>
</html>