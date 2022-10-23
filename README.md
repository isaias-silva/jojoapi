# jojoapi
<img src="https://vocesabianime.com/wp-content/uploads/2020/03/JoJos-Bizarre-Adventure-Jojo-Joestar-Johnny-Joestar-Jonathan-Joestar-1139449-wallhere.com_.jpg"/>
<h2>⚙️ deploy⚙️</h2>
<a href="https://jojo-api.herokuapp.com/" rel="noreferer" target="_blank">
   <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
</a>
<a href="https://jojoapi.up.railway.app/" rel="noreferer" target="_blank">
   <img src="https://img.shields.io/static/v1?label=rail&message=way&color=black">railway<img>
</a>
<h2>⚙️ stacks ⚙️</h2>
<div style="display:flex">

 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

</div>
<h2>⚙️ the api is in development ⚙️ </h2>

<p>api returns data from jojo's bizarre adventures manga stands, the data returned in a json is:</p>
<h2>usage</h2>
<em>
    const url = 'https://jojo-api.herokuapp.com/jojostands'

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
