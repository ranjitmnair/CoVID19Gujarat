const gir="Gir Somnath";
fetch('https://api.covid19india.org/state_district_wise.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
      document.getElementById("tco").innerHTML = data.Gujarat.districtData.Ahmadabad.confirmed + data.Gujarat.districtData.Bhavnagar.confirmed + data.Gujarat.districtData.Kachchh.confirmed
          + data.Gujarat.districtData.Gandhinagar.confirmed + data.Gujarat.districtData.Mahesana.confirmed + data.Gujarat.districtData.Porbandar.confirmed +
          data.Gujarat.districtData.Rajkot.confirmed + data.Gujarat.districtData.Surat.confirmed + data.Gujarat.districtData.Vadodara.confirmed +
          +3;

          document.getElementById("tde").innerHTML = data.Gujarat.districtData.Ahmadabad.delta.confirmed + data.Gujarat.districtData.Bhavnagar.delta.confirmed + data.Gujarat.districtData.Kachchh.delta.confirmed
          + data.Gujarat.districtData.Gandhinagar.delta.confirmed + data.Gujarat.districtData.Mahesana.delta.confirmed + data.Gujarat.districtData.Porbandar.delta.confirmed +
          data.Gujarat.districtData.Rajkot.delta.confirmed + data.Gujarat.districtData.Surat.delta.confirmed + data.Gujarat.districtData.Vadodara.delta.confirmed +
          +2;
     


    document.getElementById("amdconf").innerHTML=data.Gujarat.districtData.Ahmadabad.confirmed-5;
    document.getElementById("amddeaths").innerHTML=data.Gujarat.districtData.Ahmadabad.delta.confirmed-1;

    document.getElementById("bhaconf").innerHTML=data.Gujarat.districtData.Bhavnagar.confirmed;
    document.getElementById("bhadeaths").innerHTML=data.Gujarat.districtData.Bhavnagar.delta.confirmed+1;

    document.getElementById("kutconf").innerHTML=data.Gujarat.districtData.Kachchh.confirmed;
    document.getElementById("kutdeaths").innerHTML=data.Gujarat.districtData.Kachchh.delta.confirmed;

    document.getElementById("ganconf").innerHTML=data.Gujarat.districtData.Gandhinagar.confirmed;
    document.getElementById("gandeaths").innerHTML=data.Gujarat.districtData.Gandhinagar.delta.confirmed;

    document.getElementById("mehconf").innerHTML=data.Gujarat.districtData.Mahesana.confirmed;
    document.getElementById("mehdeaths").innerHTML=data.Gujarat.districtData.Mahesana.delta.confirmed;

    document.getElementById("porconf").innerHTML=data.Gujarat.districtData.Porbandar.confirmed;
    document.getElementById("pordeaths").innerHTML=data.Gujarat.districtData.Porbandar.delta.confirmed;

    document.getElementById("rajconf").innerHTML=data.Gujarat.districtData.Rajkot.confirmed;
    document.getElementById("rajdeaths").innerHTML=data.Gujarat.districtData.Rajkot.delta.confirmed;

    document.getElementById("surconf").innerHTML=data.Gujarat.districtData.Surat.confirmed;
    document.getElementById("surdeaths").innerHTML=data.Gujarat.districtData.Surat.delta.confirmed;


    document.getElementById("vadconf").innerHTML=data.Gujarat.districtData.Vadodara.confirmed;
    document.getElementById("vaddeaths").innerHTML=data.Gujarat.districtData.Vadodara.delta.confirmed+1;

  })
  .catch(err => {
    console.log("error")
  })
