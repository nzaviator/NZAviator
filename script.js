function densityAltitudeFunction(e, type) {
  let value = e.target.value;
  var tAlti = parseInt(document.getElementById("tAlti").value);

  if (!isNaN(tAlti)) {

    if (tAlti <= 10000) {
      var th1 = parseInt(tAlti / 1000) * 1000;

      var th = tAlti - th1;


      var isaCal;

      if (th <= 249) {

        isaCal = 0;
      }
      else if (th >= 250 && th <= 500) {

        isaCal = 500;

      }
      else if (th > 500 && th <= 749) {

        isaCal = 500;

      }
      else if (th >= 750 && th <= 1000) {

        isaCal = 1000;

      }

      tAlti = th1 + isaCal;

    }
    else {
      tAlti = parseInt(document.getElementById("tAlti").value);
    }

    console.log('tAlti', tAlti)


    if (tAlti < 250) {

      isa = 15;
    }
    else if (tAlti >= 250 && tAlti < 1000) {
      isa = 14;
    }
    else if (tAlti == 1000) {
      isa = 13;
    }
    else if (tAlti == 1500) {
      isa = 12;
    }
    else if (tAlti == 2000) {
      isa = 11;
    }
    else if (tAlti == 2500) {
      isa = 10;
    }
    else if (tAlti == 3000) {
      isa = 9;
    }
    else if (tAlti == 3500) {
      isa = 8;
    }
    else if (tAlti == 4000) {
      isa = 7;
    }
    else if (tAlti == 4500) {
      isa = 6;
    }
    else if (tAlti == 5000) {
      isa = 5;
    }
    else if (tAlti == 5500) {
      isa = 4;
    }
    else if (tAlti == 6000) {
      isa = 3;
    }
    else if (tAlti == 6500) {
      isa = 2;
    }
    else if (tAlti == 7000) {
      isa = 1;
    }
    else if (tAlti == 7500) {
      isa = 0;
    }
    else if (tAlti == 8000) {
      isa = -1;
    }
    else if (tAlti == 8500) {
      isa = -2;
    }
    else if (tAlti == 9000) {
      isa = -3;
    }
    else if (tAlti == 9500) {
      isa = -4;
    }
    else if (tAlti == 10000) {
      isa = -5;
    }
    else if (tAlti > 10000) {

      document.getElementById("tAlti").value = '10000';
      tAlti = 10000;
      isa = -5;

    }

    document.getElementById("isa").value = parseInt(isa);

    var airtemp = parseInt(document.getElementById("airtemp").value);
    var pAlti2 = parseInt(document.getElementById("pAlti2").value);

    var DensityAlt = pAlti2 + 120 * (airtemp - isa);
    if (isNaN(DensityAlt)) {
      document.getElementById("dAlti").value = '';
    } else {
      document.getElementById("dAlti").value = DensityAlt;
    }


  } else {
    document.getElementById("dAlti").value = '';
  }

}
function altitudeFunction(e, type) {
  let value = e.target.value;
  var fele = parseInt(document.getElementById("fele").value);
  var alti = parseInt(document.getElementById("alti").value);
  var PressureAlt = (1013 - alti) * 30 + fele;
  if (isNaN(PressureAlt)) {
    document.getElementById("pAlti").value = '';
  } else {
    document.getElementById("pAlti").value = PressureAlt;
  }
}

//this is the button
var acc = document.getElementsByClassName("course-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  //when one of the buttons are clicked run this function
  acc[i].onclick = function () {
    //variables
    var panel = this.nextElementSibling;
    var coursePanel = document.getElementsByClassName("course-panel");
    var courseAccordion = document.getElementsByClassName("course-accordion");
    var courseAccordionActive = document.getElementsByClassName("course-accordion active");

    /*if pannel is already open - minimize*/
    if (panel.style.maxHeight) {
      //minifies current pannel if already open
      panel.style.maxHeight = null;
      //removes the 'active' class as toggle didnt work on browsers minus chrome
      this.classList.remove("active");
    } else { //pannel isnt open...
      //goes through the buttons and removes the 'active' css (+ and -)
      for (var ii = 0; ii < courseAccordionActive.length; ii++) {
        courseAccordionActive[ii].classList.remove("active");
      }
      //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
      for (var iii = 0; iii < coursePanel.length; iii++) {
        this.classList.remove("active");
        coursePanel[iii].style.maxHeight = null;
      }
      //opens the specified pannel
      panel.style.maxHeight = panel.scrollHeight + "px";
      //adds the 'active' addition to the css.
      this.classList.add("active");
    }
  }//closing to the acc onclick function
}//closing to the for loop.


function wightPoundFunction(e, type) {
  let value = e.target.value;
  if (type == 'oun') {
    document.getElementById("pnd").value = value * (0.0625);
    document.getElementById("mt").value = value * (35273.96195);

    document.getElementById("gm").value = value * (28.3495);
    document.getElementById("mgm").value = value * (28349.500000294);
    document.getElementById("kgm").value = value * (0.0283495);
  } else if (type == 'pnd') {
    document.getElementById("oun").value = value * (16);
    document.getElementById("mt").value = value * (0.000453592);

    document.getElementById("gm").value = value * (453.592);
    document.getElementById("mgm").value = value * (453592);
    document.getElementById("kgm").value = value * (0.453592);
  } else if (type == 'mt') {
    document.getElementById("oun").value = value * (35274);
    document.getElementById("pnd").value = value * (2204.62);

    document.getElementById("gm").value = value * (1e+6);
    document.getElementById("mgm").value = value * (1e+9);
    document.getElementById("kgm").value = value * (1000);
  }
}
function wightFunction(e, type) {
  let value = e.target.value;
  if (type == 'gm') {
    document.getElementById("mgm").value = value * 1000;
    document.getElementById("kgm").value = value * (0.001);

    document.getElementById("oun").value = value * (0.035274);
    document.getElementById("pnd").value = value * (0.00220462);
    document.getElementById("mt").value = value * (0.000001);
  } else if (type == 'mgm') {
    document.getElementById("gm").value = value * (0.001);
    document.getElementById("kgm").value = value * (0.000001);

    document.getElementById("oun").value = value * (0.000035274);
    document.getElementById("pnd").value = value * (2.20462e-6);
    document.getElementById("mt").value = value * (0.0000000011023);
  } else if (type == 'kgm') {
    document.getElementById("gm").value = value * 1000;
    document.getElementById("mgm").value = value * 1000000;

    document.getElementById("oun").value = value * (35.274);
    document.getElementById("pnd").value = value * (2.20462);
    document.getElementById("mt").value = value * (0.0009999988107);
  }
}
function distanceFunction(e, type) {
  let value = e.target.value;
  if (type == 'stm') {
    document.getElementById("ntm").value = value * (0.868976);
    document.getElementById("kmt").value = value * (1.60934);
    document.getElementById("mtr").value = value * (1609.34);
    document.getElementById("yrd").value = value * (1760);
    document.getElementById("ft").value = value * (5280);
  } else if (type == 'ntm') {
    document.getElementById("stm").value = value * (1.15078);
    document.getElementById("kmt").value = value * (1.852);
    document.getElementById("mtr").value = value * (1852);
    document.getElementById("yrd").value = value * (2025.37);
    document.getElementById("ft").value = value * (6076.12);
  } else if (type == 'kmt') {
    document.getElementById("stm").value = value * (0.621371);
    document.getElementById("ntm").value = value * (0.539957);
    document.getElementById("mtr").value = value * (1000);
    document.getElementById("yrd").value = value * (1093.61);
    document.getElementById("ft").value = value * (3280.84);
  } else if (type == 'mtr') {
    document.getElementById("stm").value = value * (0.000621371);
    document.getElementById("ntm").value = value * (0.000539957);
    document.getElementById("kmt").value = value * (0.001);
    document.getElementById("yrd").value = value * (1.09361);
    document.getElementById("ft").value = value * (3.28084);
  } else if (type == 'yrd') {
    document.getElementById("stm").value = value * (0.000568182);
    document.getElementById("ntm").value = value * (0.000493737);
    document.getElementById("kmt").value = value * (0.0009144);
    document.getElementById("mtr").value = value * (0.9144);
    document.getElementById("ft").value = value * (3);
  } else if (type == 'ft') {
    document.getElementById("stm").value = value * (0.000189394);
    document.getElementById("ntm").value = value * (0.000164579);
    document.getElementById("kmt").value = value * (0.0003048);
    document.getElementById("mtr").value = value * (0.3048);
    document.getElementById("yrd").value = value * (0.333333);
  }
}
function temperatureFunction(e, type) {
  let value = e.target.value;
  var resultC = 0;
  var resultK = 0;
  var resultF = 0;

  if (type == 'fht') {
    if (value != 0 || value != '') {
      resultC = (value - 32) * (5 / 9);
      document.getElementById("celsius").value = resultC.toFixed(3);
      resultK = ((value - 32) / 1.8) + 273.15;
      document.getElementById("kelvin").value = resultK.toFixed(3);
    } else {
      document.getElementById("celsius").value = 0;
      document.getElementById("kelvin").value = 0;
    }

  } else if (type == 'cel') {
    if (value != 0 || value != '') {
      resultF = (value * (9 / 5)) + 32;
      document.getElementById("farenheit").value = resultF.toFixed(3);
      resultK = +value + (273.15);
      document.getElementById("kelvin").value = resultK.toFixed(3);
    }
    else {
      document.getElementById("farenheit").value = 0;
      document.getElementById("kelvin").value = 0;
    }

  } else if (type == 'kel') {
    if (value != 0 || value != '') {
      resultF = 1.8 * (value - 273.15) + 32;
      document.getElementById("farenheit").value = resultF.toFixed(3);
      resultC = +value - 273.15;
      document.getElementById("celsius").value = resultC.toFixed(3);
    }
    else {
      document.getElementById("farenheit").value = 0;
      document.getElementById("celsius").value = 0;
    }


  }
}

function reciprocalHeadingFunction(e, type) {
  let value = e.target.value;
  var reciprocal;

  if (+value > 360) {
    document.getElementById(type).value = 360;
  }
  else {
    if (type == 'heading') {
      if (value != '') {
        if (+value <= 180) {

          reciprocal = +value + 180;

        }
        else {
          reciprocal = +value - 180;

        }
        document.getElementById("reciprocal").value = reciprocal;
      }
      else {

        document.getElementById("reciprocal").value = '';
      }
    }

    else if (type == 'reciprocal') {

      if (value != '') {
        if (+value <= 180) {

          reciprocal = +value + 180;

        }
        else {
          reciprocal = +value - 180;

        }
        document.getElementById("heading").value = reciprocal;
      }
      else {

        document.getElementById("heading").value = '';
      }

    }
  }

}



function trackErrorFunction(e, type) {

  let value = e.target.value;

  if (type == 'dot1' || type == 'dg1') {

    var dg = parseFloat(document.getElementById("dg1").value);

    var dot = parseFloat(document.getElementById("dot1").value);

    var TE = (60 / dg) * dot;

    if (isNaN(TE)) {
      //document.getElementsByClassName("te").value = '';
      document.getElementById("te1").value = '';
      document.getElementById("dot1").value = '';

    } else {
      //document.getElementsByClassName("te").value = TE;
      document.getElementById("te1").value = TE.toFixed(2)
    }
  }


  if (type == 'dot2' || type == 'te2') {

    var TE = parseFloat(document.getElementById("te2").value);

    var dot = parseFloat(document.getElementById("dot2").value);

    //  var TE = (60/dg)*dot;

    var dg = (dot / TE) * 60;

    if (isNaN(dg)) {
      //document.getElementsByClassName("te").value = '';
      document.getElementById("dg2").value = '';
      document.getElementById("dot2").value = '';

    } else {
      //document.getElementsByClassName("te").value = TE;
      document.getElementById("dg2").value = dg.toFixed(2)
    }
  }


  if (type == 'dg3' || type == 'te3') {

    var TE = parseFloat(document.getElementById("te3").value);

    var dg = parseFloat(document.getElementById("dg3").value);

    //  var TE = (60/dg)*dot;

    var dot = (dg / 60) * TE;

    if (isNaN(dot)) {
      //document.getElementsByClassName("te").value = '';
      document.getElementById("dot3").value = '';
      document.getElementById("te3").value = '';

    } else {
      //document.getElementsByClassName("te").value = TE;
      document.getElementById("dot3").value = dot.toFixed(2)
    }
  }



}


function closingAngleFunction(e, type) {

  let value = e.target.value;

  if (type == 'ca_dot1' || type == 'dtg1') {

    var dtg = parseFloat(document.getElementById("dtg1").value);

    var dot = parseFloat(document.getElementById("ca_dot1").value);

    var CA = (60 / dtg) * dot;

    if (isNaN(CA)) {
      //document.getElementsByClassName("te").value = '';
      document.getElementById("ca1").value = '';
      document.getElementById("dot1").value = '';

    } else {
      //document.getElementsByClassName("te").value = TE;
      document.getElementById("ca1").value = CA.toFixed(2)
    }
  }


  if (type == 'ca_dot2' || type == 'ca2') {

    var CA = parseFloat(document.getElementById("ca2").value);

    var dot = parseFloat(document.getElementById("ca_dot2").value);

    //  var TE = (60/dg)*dot;

    var dtg = (60 / CA) * dot;

    if (isNaN(dtg)) {
      //document.getElementsByClassName("te").value = '';
      document.getElementById("dtg2").value = '';
      document.getElementById("ca_dot2").value = '';

    } else {
      //document.getElementsByClassName("te").value = TE;
      document.getElementById("dtg2").value = dtg.toFixed(2)
    }
  }


  if (type == 'dtg3' || type == 'ca3') {

    var CA = parseFloat(document.getElementById("ca3").value);

    var dtg = parseFloat(document.getElementById("dtg3").value);

    //  var TE = (60/dg)*dot;

    var dot = (60 / dtg) * CA;

    if (isNaN(dot)) {
      //document.getElementsByClassName("te").value = '';
      document.getElementById("ca_dot3").value = '';
      document.getElementById("ca3").value = '';

    } else {
      //document.getElementsByClassName("te").value = TE;
      document.getElementById("ca_dot3").value = dot.toFixed(2)
    }
  }



}


function totalCorrectionFunction(e, type) {

  let value = e.target.value;

  if (type == 'tc_te1' || type == 'tc_ca1') {

    var TE = parseFloat(document.getElementById("tc_te1").value);

    var CA = parseFloat(document.getElementById("tc_ca1").value);

    var TC = TE + CA

    if (isNaN(TC)) {

      document.getElementById("tc1").value = '';
      document.getElementById("tc_ca1").value = '';

    } else {

      document.getElementById("tc1").value = TC.toFixed(2)
    }
  }


  if (type == 'tc_ca2' || type == 'tc2') {

    var CA = parseFloat(document.getElementById("tc_ca2").value);

    var TC = parseFloat(document.getElementById("tc2").value);

    var TE = TC - CA;

    if (isNaN(TE)) {
      //document.getElementsByClassName("te").value = '';
      document.getElementById("tc_te2").value = '';
      document.getElementById("tc_ca2").value = '';

    } else {

      document.getElementById("tc_te2").value = TE.toFixed(2)
    }
  }


  if (type == 'tc_te3' || type == 'tc3') {

    var TC = parseFloat(document.getElementById("tc3").value);

    var TE = parseFloat(document.getElementById("tc_te3").value);

    var CA = TC - TE;

    if (isNaN(CA)) {
      document.getElementById("tc_te3").value = '';
      document.getElementById("tc_ca3").value = '';
    } else {
      document.getElementById("tc_ca3").value = CA.toFixed(2)
    }
  }
}
function isright(obj) {
  var value = +obj.value.replace(/\D/g, '') || 0;
  if (value > 360) value = 360;
  if (value < 1) value = '';
  obj.value = value
}
var Track = 'left';

document.getElementsByName('track').forEach(function (chk) {
  chk.addEventListener('click', function () {
    if (this.checked) {
      //  console.log(this.value);
      Track = this.value;
    }
    newHeadingFunction(event, 'nh_tc')
  });
});

function newHeadingFunction(e, type) {

  let value = e.target.value;


  if (type == 'nh_tc' || type == 'original_heading') {

    var OH = parseFloat(document.getElementById("original_heading").value);

    var TC = parseFloat(document.getElementById("nh_tc").value);

    var NewHeading;

    if (Track == 'left') {
      NewHeading = OH + TC;

    }
    else if (Track == 'right') {
      NewHeading = OH - TC + 360;
    }

    if (NewHeading > 360) {
      NewHeading = NewHeading - 360;
    }

    if (NewHeading < 10) {
      NewHeading = '00' + NewHeading;
    }

    if (isNaN(NewHeading)) {
      document.getElementById("new_heading").value = '';
      document.getElementById("nh_tc").value = '';

    } else {

      document.getElementById("new_heading").value = NewHeading;
    }
  }
}
