
$(document).ready(function () {
  $('#text').focus();
});

$(document).bind('keypress',function (e) {
  if(e.keyCode == 13){
    $('#send_Btn').trigger('click');
  }
});

$('#send_Btn').click(function () {
    var newmsg = document.getElementById('text').value;
    if(newmsg=='')
      return;
    const p = document.getElementById('sohbet');
    var newEle = document.createElement("div");
    var test = document.createElement('a');


    newEle.className = "balon1 p-2 m-0 position-relative";
    test.className = "float-right";
    test.innerHTML = newmsg;

    p.appendChild(newEle);
    newEle.appendChild(test);


    aiPost(genRes(newmsg));
    //genPhoto();

    document.getElementById('text').value = '';

    p.scrollTop = p.scrollHeight;

});

$('#myupload').change(function (e) {
   //alert($(this).val()+" upload successfully. AI is processing.");
   aiPost($(this).val()+"   upload successfully!");

    const p = document.getElementById('sohbet');
    p.scrollTop = p.scrollHeight;

});


aiPost = function (msg) {
    if(msg=='image'){
      genPhoto();
      return;
    }
    const p = document.getElementById('sohbet');
    var newEle = document.createElement("div");
    var test = document.createElement('a');

    newEle.className = "balon2 p-2 m-0 position-relative";
    test.className = "float-left sohbet2";
    test.innerHTML = msg;

    p.appendChild(newEle);
    newEle.appendChild(test);
};

genRes = function (msg) {
    var dict = {'hi':'Hi ','hello':'Hello','who are you':'I am your AI Teaching Assistant.',
      'what can you do for me':"You can ask me somthing like:  My kid's current photo. My kid's last week work.",
      "my kid's current photo":'image',"no":"No?","how are you":"I am fine, thank you!", "my kid's last week work":"He drew a picture and you can see it in gallery"};
    console.log(dict['hi']);
    if(dict[msg])
      return dict[msg];
    else
      return "Sorry, I can't answer this question now, but I will be able to answer very soon.";
};

genPhoto = function () {
  console.log("in photo");
  const p = document.getElementById('sohbet');
  var newEle = document.createElement("div");

  var photo = document.createElement('IMG');

  newEle.className = "balon2 p-2 m-0 position-relative";
  photo.className = "float-left sohbet2";
  photo.src = "../images/kid.jpg";
  photo.height = 250;
  photo.width = 350;

  p.appendChild(newEle);
  newEle.appendChild(photo);
};
