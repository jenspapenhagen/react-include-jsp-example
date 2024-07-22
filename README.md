# Include React App into existing JSP App #

### WARNING ###

this is only an example Project

We use am simple [Apache Tomcat 10](https://tomcat.apache.org/) App,
inside a Docker Compose Setup

the folder "app" is mounted into the right postion of the Tomcat.
the web.xml is only for this example.

#### Hint ####

under "app/WEB-INF/lib" we need to install [JSTL](https://projects.eclipse.org/projects/ee4j.jstl) by download the [spec](https://mvnrepository.com/artifact/jakarta.servlet.jsp.jstl/jakarta.servlet.jsp.jstl-api/3.0.0)
 an the [impl](https://mvnrepository.com/artifact/org.glassfish.web/jakarta.servlet.jsp.jstl/3.0.1)

## Buidling the React App with Vite ##

Overview: <https://vitejs.dev/guide/> \
Better user with TypeScript

this example react app is under "react-app"

run the build of the react

```shell
npm install
npm run build
```

under "react-app\dist\"
we will find an "index.html"
and the linked CSS and JS file on the subfolder "assets"
copy all this into the "existing" JSP App.

DIY: copy the linking of the CSS and JS file into the needed jsp file.
and copy the HTML Snipped:

```HTML
<div id="button-test"></div>
```

on the right place.

now we can start the tomcat 10.1.26

```shell
docker-compose up -d
```

Now we can check the example JSP jakarta tomcat app with included react component with full hook support.
