$(document).ready(function(){initialize();var geocoder;if(navigator.geolocation){}
function successFunction(position){var lat=position.coords.latitude;var lng=position.coords.longitude;codeLatLng(lat,lng)}
function errorFunction(){console.log("Geocoder failed");}
function initialize(){geocoder=new google.maps.Geocoder();}
var html=""
function codeLatLng(lat,lng){var latlng=new google.maps.LatLng(lat,lng);geocoder.geocode({'latLng':latlng},function(results,status){if(status==google.maps.GeocoderStatus.OK){if(results[1]){this.html=results[0].formatted_address;var curaddr=results[0].formatted_address;for(var i=0;i<results[0].address_components.length;i++){for(var b=0;b<results[0].address_components[i].types.length;b++){if(results[0].address_components[i].types[b]=="locality"){city=results[0].address_components[i];break;}}}
var cityname=city.long_name;getSchedulePlace(cityname);}else{console.log("No results found");}}
else{console.log(status);}});}
function getSchedulePlace(name){var str='&place='+name+'&action=schedulePlace';$.ajax({type:"POST",dataType:"json",url:Userloc.ajaxurl,data:str,success:function(data){var resaddr=data.res;jQuery(".meetuser_loc").text(name);jQuery('input[name=usermeetingplace]').val(name);if(resaddr==''){$('#schedulemeeting_addr').html('<p>Result Not found.</p>');}
else{jQuery('#schedulemeeting_addr').html(data.res);jQuery('.user-location-detail').html(data.res);}
jQuery('#schedulemeeting_map').html(data.maploc);}});return false;}});