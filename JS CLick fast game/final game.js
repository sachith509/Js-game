var stratTime=new Date().getTime();//get default time(now)to stratTime variable
  
  function getRandomColor(){ //create function for random color
  
	var letters='0123456789ABCDEF';
	var color='#';
	for(var i=0;i<6;i++){
			
			color+= letters[Math.floor(Math.random()*16)]; //hexa value eka generate karanwa
		}
		return color;
  
	}
  
  
  function shapeAppear(){
  
	var top= Math.random()*550;//generate random value for shape top align
	var left= Math.random()*550;// value for left align
	var Width_Height=Math.random()*150;// generate random value for shape's width and height
	
	
	if(Math.random()>0.5){// if rando no larger than 0.5?
	document.getElementById("shapes").style.borderRadius="50%"; // yes,circlr
	}else{
		document.getElementById("shapes").style.borderRadius="0%";//no, square
	}
	
	document.getElementById("shapes").style.width=Width_Height+"px";// random shape width
	document.getElementById("shapes").style.height=Width_Height+"px";// random shape height
	
	document.getElementById("shapes").style.top=top+"px";// random Position top 
	document.getElementById("shapes").style.left=left+"px";// random position left
	document.getElementById("shapes").style.display="block"; //appear in display (shape eka appear wenwa display eke. default meka display wenne na.line no 10)
	
	document.getElementById("shapes").style.backgroundColor=getRandomColor(); //shapes kiyana id eka thiyna style sheet eke background-color ekata random color eka dagnnwa. 
	
    stratTime=new Date().getTime();// shape eka appear una gaman time eka capture karagannawa
  }
  function shapeapear(){
  setTimeout(shapeAppear,Math.random()*1500); //set time out kiyana key word eken karanne yamkisi welawak yam deyak delay karana eka. shape apear functon eka mee vidiyata delay karannalu, e delay karana time eka random wenna ona nisa math random code eka dala,eken generate wena dashamaya agaya 1500 guna karanwa.ethakota thathpara thunata adu 1 t wedi agayak enawa.
  }//after that we need this code line(62) to appear shape with delay time. 
  
  shapeapear();
 document.getElementById("shapes").onclick=function(){ //shape eka click karaama,
	
	document.getElementById("shapes").style.display="none"; //shape eka disappear wenawa
	var endTime=new Date().getTime();                       // shape eka click karama ee click karan mohothe thiyana time eka capture karagnnwa
	
	var time=(endTime-stratTime)/1000; // dissapear time eken appear eka adu karala click karanna giyapu welawa hoyagnnawa
	//alert(time);
	
	document.getElementById("time").innerHTML=time+"s"; // line no 71 di ganna time eka time kiyana id eka thiyana span ekata dagnnwa.line no 17 
	shapeapear(); //function eka aye call krnwaa
	  
	  
	  //line no 24-34 :random color generate karanwa. line no 57 n e colors line no 9 ekata dagnnwa.
	  //line 39-40 appear wena shape eke pihitimat awshya random numbers
	  //line no 41 shape eke size ekat ona karana width and height random generate karanawa.
	  //line no 44-48 shape eka circle ekkd square ekkd kiyla decide krnawa.
	  //line no 50-51 shape eke size eka
	  //line 53-55 shape eke pihitima and 55n appear vima
	  // line 57  background color eka.
	 //line no 17 thiyana span ekak ona wenawa time ekak display karaddi 
	// line no 18 div eka thama game ekedi me appear wena shape eka.
	  //line no 37 thiyana shapeAppear(capital'A') ekai line no 61 thiyana shapeappear(smple'a') ekai ekak neme 2k. line no 61 thiyana function eken thama 37 line eke thiyana function eka handle karanne. appear wenna ona thena , vidiya, paata okkama 37 line eke thiynwa. eth eka awshya welawata appear karanne line no 61 eke function eka. 
 }
 
