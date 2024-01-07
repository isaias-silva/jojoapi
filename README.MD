# jojoapi
<img src="https://vocesabianime.com/wp-content/uploads/2020/03/JoJos-Bizarre-Adventure-Jojo-Joestar-Johnny-Joestar-Jonathan-Joestar-1139449-wallhere.com_.jpg"/>

<h2>⚙️ stacks ⚙️</h2>
<div style="display:flex">

 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=black">
<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=black">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

</div>



<h2>usage</h2>
<h3>instalation</h3>
<p>
config a .env file:
<pre>
PORT=port of api
SECRET="secret for sessions"
DB_PASSWORD="DATABASE PASSWORD"

ADM_PASS="ADM PASS"
ADM_NAME="ADM NAME"
ADM_MAIL="ADM@MAIL"
</pre>
</p>
<p>
init the containers of application with docker compose:
<pre>
docker-compose up
</pre>

</p>
<p>
   insert in database the stands info:<br>
   <strong> in Linux: (check the container name) </strong>
   <pre>
   bash migrate.sh
   </pre>
 <strong> in Windows: </strong>
   <pre>
docker cp ./sql/inserts.sql container-name:./inserts.sql

docker exec -it container-name mysql -u root -p  --execute 'source ./inserts.sql';

   </pre>
</p>

<h3>requests: </h3>
<em>
    const url = 'apiurl/stands/get'

   fetch(url).then((res) => {
        return res.json()
    }).then((data) => {}
</em>
<ul>
    <li>stand name</li>
    <li>user</li>
    <li>stand picture</li>
    <li>stand color</li>
    <li>atributes of hexagonal graph</li>
</ul>

<h2>⚙️ examples ⚙️</h2>
<div>
   <ul>
      <li>
   <a href="https://jojolist.netlify.app/">
     basic version 
   </a>
      </li>
      <li>
   <a href="https://jojo-list.netlify.app/">
     React version 
   </a>
      </li>
   </ul>
</div>
<h2>x & y in Canvas for atributes of hexagonal graph </h2>
<table>
  <tr>
    <th></th>
    <th>A</th>
    <th>B</th>
    <th>C</th>
    <th>D</th>
    <th>E</th>
  </tr>
  <tr>
    <td>POWER</td>
      <td>150,35</td>
       <td>150,45</td>
          <td>150,55</td>
             <td>150,60</td>
                <td>150,70</td>
  </tr>
  <tr>
<td>SPEED</td>
   <td>220,55</td>
      <td>200,60</td>
        <td>185,65</td>
         <td>175,70</td>
            <td>160,70</td>
  </tr>
  <tr>
  <td>RANGE</td>
     <td>220,95</td>
      <td>200,90</td>
       <td>195,85</td>
           <td>170,85</td>
              <td>160,80</td>


</tr>
  <tr>  
  <td>DURABILITY</td>
     <td>150,112</td>
      <td>150,105</td>
        <td>150,100</td>
          <td>150,90</td>
            <td>150,85</td>
   </tr>
  <tr>  
  <td>PRECISION</td>
    <td>85,95</td>
    <td>100,90</td>
       <td>110,85</td>
    <td>115,75</td>
    <td>140,80</td>
   </tr>
  <tr>
<td>POTENTIAL</td>
   <td>80,55</td>
    <td>100,60</td>
    <td>110,65</td>
    <td>130,60</td>
    <td>140,70</td>

  </tr>
</table>
