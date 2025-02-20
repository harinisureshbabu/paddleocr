var clickOnce = 0;
var callOnce = 0;
var callOncerewardAccept = 0;
var reqBlockList = [];
var rewardAccept = 0;

console.log("Welcome To Harini Online Jobs");

//////////////////////////////////////////////////////////////

var currentTime = "";
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = ":AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = ":PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = ":AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    currentTime = hour + ":"
            + min + ":" + sec + am_pm;
    document.getElementById("liveTime").innerText = currentTime;
}

var jobUrl_list1 = "";
var jobUrl_list2 = "";
var jobUrl_list3 = "";
var jobUrl_list4 = "";
var jobUrl_list5 = "";
var jobUrl_list6 = "";
var jobUrl_list7 = "";
var jobUrl_list8 = "";

var job_Timer = "";
var job_List_Timer = 50000;
var job_int = "";
var UpdateFieldsUrl;
var WorkerId;
var d = new Date();
var n = d.getMinutes();
var intervalID;
var run_job ="";
var joblist_run ="";
var qocr_onoff="";
var psame_onoff="";
var panel_onoff = "0";
var q_test = "";
var set_limit = 1;


if (window.location.href == "https://worker.mturk.com/tasks" && document.getElementsByClassName("text-uppercase")[0]) {
    var table1 = document.createElement('div');
    table1.innerHTML = '<table frame="box" width="100%"><tr><th id="Req1" colspan="2" style="background-color: lightgreen;color: brown;">CLASS HOJUSA</th></tr> \
        <tr><td id="liveTime" style="color: blue;"></td><td id="payInfo"></td></tr> \
        <tr><td id="runningjosb"><td id="curEarnInfo"></td></td></tr> \
        <tr><td id="timeLocal"></td><td id="hitLimitInfo"></td></tr> \
        <tr><td id="jobstatus"></td></tr> \
        <tr><td id="inform"></td></tr> \
        <tr id="removeInfo"><td><iframe id="newWindow1" src=""></iframe></td><td><iframe id="newWindow2" src=""></iframe></td></tr> \
        <tr><td id="PayoutInfo1"></td><td id="PayoutInfo2"></td></tr> \
        </table> \
        ';
    document.body.appendChild(table1);
    WorkerId = document.getElementsByClassName("text-uppercase")[0].innerText.replace("COPIED","");
    WorkerId = WorkerId.replace("\n","");
    GetJobList();
    setInterval(function() {  location.reload(true); }, 900000);
    setInterval(function() {  showTime(); }, 1000);
    setInterval(function() {  GetJobList(); }, 120000);
    setTimeout(function() {  UpdateIdDetails(); }, 140000);
    setTimeout(function() {  getUrl(); }, 4000);
    setInterval(function() {  currentJobs(); }, 10000);
    //if(n>30) { window.open('https://worker.mturk.com/earnings', '_blank'); }
    if(n > 29) {
        document.getElementById("newWindow1").src = "https://worker.mturk.com/earnings";
        document.getElementById("newWindow2").src = "https://worker.mturk.com/payment_schedule";
        setTimeout(function() { updatePaymentDetails(); }, 20000);
    }
    //currentJobs();
}

if(document.getElementsByClassName("a-input-text a-span12 cvf-widget-input cvf-widget-input-code cvf-widget-input-captcha fwcim-captcha-guess")[0]) {
    setTimeout(function() { window.close(); }, 60000);
}


var gerCurrEarnings = "";
var getNextPayDate = "";
var set_payDate = "";

if(window.location == "https://worker.mturk.com/payment_schedule") {
    setTimeout(function() {
        if(document.querySelector("#\\33 ")) {
            if(document.querySelector("#\\33 ").checked == true) {
                getPayoutDate = "3";
            }
            else if(document.querySelector("#\\37 ").checked == true) {
                getPayoutDate = "7";
            }
            else if(document.querySelector("#\\31 4").checked == true) {
                getPayoutDate = "14";
            }
            else if(document.querySelector("#\\33 0").checked == true) {
                getPayoutDate = "30";
            }
            if(document.querySelector("#MainContent > form > div:nth-child(1) > div.col-xs-12.col-xs-push-1.m-l-xl > div:nth-child(2)")) {
                if(document.querySelector("#MainContent > form > div:nth-child(1) > div.col-xs-12.col-xs-push-1.m-l-xl > div:nth-child(2)").innerText.indexOf("Add a bank account") !=-1) {
                    getPayoutDate = getPayoutDate+"|"+"ADD BANK | "+set_payDate;
                }
            }
            var get_payDate = window.parent.document.getElementById('payInfo').innerText;
            if(get_payDate == 3) {
                if(document.querySelector("#GDS").disabled == false && document.querySelector("#\\33 ").checked == false) {
                    document.querySelector("#GDS").click();
                    document.querySelector("#\\33 ").click();
                    document.querySelector("#MainContent > form > div.form-line.form-group.visible-in-step-one.p-b-lg > div > div > input.btn.btn-primary.p-x-xl.m-r-sm.m-b-sm").click();
                }
            }
            else if(get_payDate == 7) {
                if(document.querySelector("#GDS").disabled == false && document.querySelector("#\\37 ").checked == false) {
                    document.querySelector("#GDS").click();
                    document.querySelector("#\\37 ").click();
                    document.querySelector("#MainContent > form > div.form-line.form-group.visible-in-step-one.p-b-lg > div > div > input.btn.btn-primary.p-x-xl.m-r-sm.m-b-sm").click();
                }
            }
            else if(get_payDate == 14) {
                if(document.querySelector("#GDS").disabled == false && document.querySelector("#\\31 4").checked == false) {
                    document.querySelector("#GDS").click();
                    document.querySelector("#\\31 4").click();
                    document.querySelector("#MainContent > form > div.form-line.form-group.visible-in-step-one.p-b-lg > div > div > input.btn.btn-primary.p-x-xl.m-r-sm.m-b-sm").click();
                }
            }
            else if(get_payDate == 30) {
                if(document.querySelector("#GDS").disabled == false && document.querySelector("#\\33 0").checked == false) {
                    document.querySelector("#GDS").click();
                    document.querySelector("#\\33 0").click();
                    document.querySelector("#MainContent > form > div.form-line.form-group.visible-in-step-one.p-b-lg > div > div > input.btn.btn-primary.p-x-xl.m-r-sm.m-b-sm").click();
                }
            }
            else if(get_payDate == "off" || get_payDate == "") {
                console.log("DATE SET OFF");
            }
        }

        var parentHeading3 = window.parent.document.getElementById('PayoutInfo2');
        if (parentHeading3) {
           parentHeading3.innerText = getPayoutDate;
        }
        var getEarnDetails = window.parent.document.getElementById('inform').innerText;
        if(getEarnDetails.indexOf(" BAD ") !=-1 && get_payDate!== "off" ) {
            if(document.querySelector("#\\33 ").checked == true) {
                document.querySelector("#GDS").click();
                document.querySelector("#\\31 4").click();
                document.querySelector("#MainContent > form > div.form-line.form-group.visible-in-step-one.p-b-lg > div > div > input.btn.btn-primary.p-x-xl.m-r-sm.m-b-sm").click();
            }
            else if(document.querySelector("#\\37 ").checked == true) {
                document.querySelector("#GDS").click();
                document.querySelector("#\\31 4").click();
                document.querySelector("#MainContent > form > div.form-line.form-group.visible-in-step-one.p-b-lg > div > div > input.btn.btn-primary.p-x-xl.m-r-sm.m-b-sm").click();
            }
            else if(document.querySelector("#\\31 4").checked == true) {
                document.querySelector("#GDS").click();
                document.querySelector("#\\33 0").click();
                document.querySelector("#MainContent > form > div.form-line.form-group.visible-in-step-one.p-b-lg > div > div > input.btn.btn-primary.p-x-xl.m-r-sm.m-b-sm").click();
            }
            else if(document.querySelector("#\\33 0").checked == true) {
                document.querySelector("#GDS").click();
                document.querySelector("#\\31 4").click();
                document.querySelector("#MainContent > form > div.form-line.form-group.visible-in-step-one.p-b-lg > div > div > input.btn.btn-primary.p-x-xl.m-r-sm.m-b-sm").click();
            }
        }
        //checkAndCallFunction(getNextPayDate, gerCurrEarnings);
    }, 11000);
}

if(window.location == "https://worker.mturk.com/payment_schedule/submit") {
    document.querySelector("#MainContent > div.row.margin-btm-lg.m-y-xs > div > div > a.btn.btn-primary.inline-block.m-l-sm").click();
}

if(window.location == "https://worker.mturk.com/earnings") {
    setTimeout(function() {
        var getBankInfo = document.getElementsByClassName("current-earnings m-b-lg")[0].getElementsByTagName("strong")[0].innerText;
        gerCurrEarnings = document.querySelector("#MainContent > div.transfers > div.current-earnings.m-b-lg > div:nth-child(1) > div > h2").innerText.replace(/[^0-9.]/g, '');
        getNextPayDate = document.getElementsByClassName("current-earnings m-b-lg")[0].getElementsByTagName("strong")[0].innerText;
        getNextPayDate = getNextPayDate.replace("Your available earnings will be transferred to your bank account", "");
        getNextPayDate = getNextPayDate.replace("based on your payment preferences.", "");
        getNextPayDate = getNextPayDate.replace(" on ", "-");
        getNextPayDate = getNextPayDate.split("-")[1];
        console.log("Pay Date 1: "+getNextPayDate+" Cur Earnings 1: "+gerCurrEarnings);

        var parentHeading4 = window.parent.document.getElementById('inform');
        if (parentHeading4) {
           parentHeading4.innerText = getNextPayDate+":"+gerCurrEarnings;
           checkAndCallFunction(getNextPayDate, gerCurrEarnings);
        }

        WorkerId = document.getElementsByClassName("text-uppercase")[0].innerText.replace("COPIED","");
        WorkerId = WorkerId.replace("\n","");
        if(getBankInfo.indexOf("Your available earnings will be transferred to your bank account") !=-1) {
                var bankInfo = getBankInfo.replace("Your available earnings will be transferred to your bank account","");
                bankInfo = bankInfo.replace("based on your payment preferences.","");
                bankInfo = bankInfo.replace(" on ","-");
                bankInfo = bankInfo+"-SB1TK-";
                if(document.getElementsByClassName("desktop-row hidden-sm-down")[0]) {
                    var getDate1 = document.getElementsByClassName("desktop-row hidden-sm-down")[0].getElementsByClassName("p-x-sm column transfer-history-col-req-date col-xs-6 col-md-5 col-lg-6 col-xl-7")[0].innerText+":"+document.getElementsByClassName("desktop-row hidden-sm-down")[0].getElementsByClassName("p-x-sm column transfer-history-col-status col-xs-6 col-md-2 col-lg-1")[0].innerText;
                    var getAmount1 = document.getElementsByClassName("desktop-row hidden-sm-down")[0].getElementsByClassName("p-x-sm column transfer-history-col-amt-req hidden-sm-down col-md-2 col-lg-2 col-xl-1 text-xs-right")[0].innerText;
                    bankInfo = bankInfo+"@"+getDate1+"-"+getAmount1+"-SB1TK-"+document.getElementsByClassName("desktop-row hidden-sm-down").length;
                    var parentHeading1 = window.parent.document.getElementById('PayoutInfo1');
                    if (parentHeading1) {
                       parentHeading1.innerText = bankInfo;
                    }
                    //UpdateBankInfo(WorkerId,bankInfo);
                }
                else {
                    var parentHeading1 = window.parent.document.getElementById('PayoutInfo1');
                    if (parentHeading1) {
                       parentHeading1.innerText = bankInfo;
                    }
                    //UpdateBankInfo(WorkerId,bankInfo);
                }
        }
        else {
            var giftInfo = document.querySelector("#MainContent > div.transfers > div.current-earnings.m-b-lg > div:nth-child(3) > div > strong").innerText;
            giftInfo = giftInfo.replace("Your available earnings will be transferred to your","");
            giftInfo = giftInfo.replace("Amazon.com gift card balance","");
            giftInfo = giftInfo.replace("payment preferences","");
            giftInfo = giftInfo.replace("based on your","");
            giftInfo = giftInfo.replace(" ","");
            giftInfo = giftInfo.replace(" ","");
            giftInfo = giftInfo.replace(" ","");
            giftInfo = giftInfo.replace(" ","");
            giftInfo = giftInfo.replace(" ","");
            giftInfo = giftInfo.replace("on","-");
            giftInfo = giftInfo+"-SB1TK-";
            var parentHeading1 = window.parent.document.getElementById('PayoutInfo1');
            if (parentHeading1) {
               parentHeading1.innerText = giftInfo;
            }
            //UpdateBankInfo(WorkerId,giftInfo);
        }

    }, 8000);
    updateProxyDetails();
}

function checkAndCallFunction(givenDate, value) {
    const currentDate = new Date();
    const targetDate = new Date(givenDate);
    const timeDifference = targetDate - currentDate;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if ( value > 0 && value < 9 && (dayDifference === 1 || dayDifference === 0) ) {
        //changeDateFunction(); // Call another function
        window.parent.document.getElementById("inform").innerText = window.parent.document.getElementById("inform").innerText+ " - BAD - "+ value + " : "+ dayDifference;
        window.parent.document.getElementById("inform").style.color = "red";
    }
    else {
        window.parent.document.getElementById("inform").innerText = window.parent.document.getElementById("inform").innerText+ " - GOOD - "+ value + " : "+ dayDifference;
        window.parent.document.getElementById("inform").style.color = "green";
    }
}

function updatePaymentDetails(){
    if(document.getElementById("PayoutInfo1").innerText != "" && document.getElementById("PayoutInfo2").innerText != "") {
        var TotalInfo = document.getElementById("PayoutInfo1").innerText+"="+document.getElementById("PayoutInfo2").innerText;
        UpdateBankInfo(WorkerId,TotalInfo);
    }
    else {
        setTimeout(function() { updatePaymentDetails(); }, 5000);
    }
}


function updateProxyDetails() {
    var xhr = new XMLHttpRequest();
    var fullIp = "https://api.ipify.org?format=json";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            $data=JSON.parse(xhr.responseText);
            updateProxyToDatabase($data.ip)
            //console.log("Live Status Updated to Live PAGE!!");
        }
    }
    xhr.open('GET', fullIp, true);
    xhr.send(null);
}

function updateProxyToDatabase(getProxy) {
    var xhr = new XMLHttpRequest();
    var fullURL = "https://ishaonlinejobs.in/banned/update_proxy.php?proxy="+getProxy+"&wid="+WorkerId;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log("Live Status Updated to Live PAGE!!");
        }
    }
    xhr.open('GET', fullURL, true);
    xhr.send(null);
}

setInterval(function() { if(window.location.href.indexOf("https://worker.mturk.com/tasks") !=-1) { window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank");  } }, 80000);

function getUrl() {
    setTimeout(function() {  getUrl(); }, 60000);
    var newArray3 = [];
    var xhr = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var $data4 =JSON.parse(xhr.responseText);
            //console.log("MyHits Page : "+$data4);
            if($data4.tasks.length > 0 ) {
                for(var i1 = 0; i1 <= $data4.tasks.length - 1 ; i1++ ) {
                    var newJobList3 = "https://worker.mturk.com"+$data4.tasks[i1].task_url.replace(".json","");
                    window.open(newJobList3, "_blank");
                    var newJobList2 = encodeURIComponent($data4.tasks[i1].project.requester_name)+"`"+encodeURIComponent($data4.tasks[i1].project.title)+"`"+encodeURIComponent($data4.tasks[i1].question.attributes.FrameSourceAttribute)+"`"+$data4.tasks[i1].project.monetary_reward.amount_in_dollars+"`"+$data4.tasks[i1].project.assignment_duration_in_seconds+"`"+$data4.tasks[i1].time_to_deadline_in_seconds;
                    newArray3.push(newJobList2);
                 }
                 updateLiveMyHits(newArray3);
            }
            else if(xhr.responseText.indexOf('{"tasks":[]}') !=-1) {
                updateLiveMyHits("0");
            }
            else {
                updateLiveMyHits("0");
            }
       }
    }
    xhr.open('GET', taskURL, true);
    xhr.send(null);
}

if (window.location.href.indexOf("&from_queue=true") != -1) {
    window.close();
}


if( window.location.href.indexOf("end_signin") != -1 && document.getElementById('ap_email')==null ) {
    setTimeout(function() {  window.location.href = "https://worker.mturk.com/tasks"; }, 5000);
}

var Rtn='0';
if(window.location.href.indexOf('3VNGVF6XGMHS5MBJKXTY65PL86BCGQ') !=-1 && Rtn == 0) {
   Rtn = '1';
  if(document.querySelector("div.work-pipeline-action:nth-child(2) > form:nth-child(1) > button:nth-child(4)")) {
    document.querySelector("div.work-pipeline-action:nth-child(2) > form:nth-child(1) > button:nth-child(4)").click();
  }
  if(document.querySelector("div.work-pipeline-action:nth-child(2) > form:nth-child(1) > button:nth-child(4)")) {
    document.querySelector("div.work-pipeline-action:nth-child(2) > form:nth-child(1) > button:nth-child(4)").click();
  }
}

function currentJobs() {
    var newArray1 = [];
    var xhr = new XMLHttpRequest();
    var fullURL = 'https://worker.mturk.com/?page_size=30&filters%5Bqualified%5D=true&filters%5Bmasters%5D=false&sort=updated_desc&filters%5Bmin_reward%5D=0.00&format=json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
        var $data2 =JSON.parse(xhr.responseText);
        if($data2.num_results > 0) {
             for(var i = 0; i < $data2.num_results - 1 ; i++ ) {
                 if(reqBlockList.indexOf($data2.results[i].requester_name) !=-1) {
                 }
                 else {
                    var newJobList1 = $data2.results[i].requester_name.replace(/[^A-Za-z0-9 -]/g, '')+":"+$data2.results[i].title.replace(/[^A-Za-z0-9 -]/g, '')+":"+$data2.results[i].hit_set_id+":"+$data2.results[i].monetary_reward.amount_in_dollars+":"+$data2.results[i].assignment_duration_in_seconds+":"+$data2.results[i].assignable_hits_count;
                    newArray1.push(encodeURIComponent(newJobList1));
                    if(rewardAccept != 0 && $data2.results[i].monetary_reward.amount_in_dollars > rewardAccept) {
                        jobUrl_list2 = $data2.results[i].hit_set_id;
                        jobUrl_list4 = $data2.results[i].hit_set_id;
                    }
                 }
             }
            updateLiveJobList(newArray1);
        }
        else { }
       }
    }
    xhr.open('GET', fullURL, true);
    xhr.send(null);

}

function updateLiveJobList(jobListData) {
    var xhr = new XMLHttpRequest();
    var fullURL = "https://ishaonlinejobs.in/banned/update_joblist.php?jobs="+encodeURIComponent(jobListData)+"&wid="+WorkerId;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //alert(xhr.responseText);
            //console.log("Live Status Updated to Live PAGE!!");
        }
    }
    xhr.open('GET', fullURL, true);
    xhr.send(null);
}

function updateLiveMyHits(myHitsData) {
    var xhr = new XMLHttpRequest();
    var fullURL = "https://ishaonlinejobs.in/banned/update_myhits.php?jobs="+myHitsData+"&wid="+WorkerId;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //alert(xhr.responseText);
            //console.log("Live Status Updated to Live PAGE!!");
        }
    }
    xhr.open('GET', fullURL, true);
    xhr.send(null);
}

function UpdateBankInfo(wid1,bank1) {
    var xhr = new XMLHttpRequest();
    var fullURL = "https://ishaonlinejobs.in/banned/update_bankinfo.php?wid="+wid1+"&bank="+bank1;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("PayoutInfo2").innerText = document.getElementById("PayoutInfo2").innerText+"Payout Updated";
            document.getElementById("removeInfo").outerHTML = "";
            //setTimeout(function() {  window.close(); }, 2000);
        }
    }
    xhr.open('GET', fullURL, true);
    xhr.send(null);
}

function UpdateLiveReport() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            setTimeout(function() {  UpdateLiveReport(); }, 150000);
        }
    }
    xhr.open('GET', "https://ishaonlinejobs.in/banned/usa_live.php?wid="+WorkerId, true);
    xhr.send(null);
}

var takeQOCR = "";

function mainFunction1() {
    var xhr1 = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == XMLHttpRequest.DONE) {
            setTimeout(function(){ mainFunction2(); }, job_Timer);
            if (xhr1.responseText.includes('Type the characters you see')) { setTimeout(function() {  window.location.reload(true); }, 5000); }
            console.log("DATA TEXT 1: "+xhr1.responseText);
            var data4 =JSON.parse(xhr1.responseText);
            if(data4.tasks.length < set_limit ) {
                ////////////////////////////////////////////
                //console.log("CALL 1....."+data4.tasks.length);
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                            if(xhr.responseText.indexOf('There are no more of these HITs available') !=-1){
                                document.getElementById("jobstatus").innerText = "There are no more Hits 1 - "+jobUrl_list1;
                            }
                            else if (xhr.responseText.indexOf('You have exceeded the allowable page request rate - ') !=-1) {
                                document.getElementById("jobstatus").innerText = "You have exceeded the allowable page 1"+jobUrl_list1;
                            }
                            else if (xhr.responseText.indexOf('captcha-image') !=-1) { setTimeout(function() {  window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank"); }, 3000); }
                            else if (xhr.responseText.indexOf('Type the characters you see') !=-1 || xhr.responseText.indexOf('captcha') !=-1) { setTimeout(function() {  window.location.reload(true); }, 5000); }
                            else{
                                var parser      = new DOMParser ();
                                var responseDoc = parser.parseFromString (xhr.responseText, "text/html");
                                if(responseDoc.getElementById('skippy')) {
                                    document.getElementById("jobstatus").innerText = "Hit Accepted 1!"+jobUrl_list1;
                                    var HitUrl = responseDoc.getElementsByTagName('form')[0].action.replace('w_wp_rtrn_top','w_pl_prvw');
                                    window.open(HitUrl.replace("https://ishaonlinejobs.in/",""),"_blank");
                                }
                            }
                    }
                }
                if(qocr_onoff == "on") {
                    var secondsLocal = document.getElementById("liveTime").innerText.split(":");
                    var panelTimings = ["00","01","02","03","04","05","06","07","08","30","31","32","33","34","35","36","37","38"];
                    if(qocr_onoff == "on" && secondsLocal[2] > 45 && (secondsLocal[1].toString().slice(-1) == "9" || secondsLocal[1].toString().slice(-1) == "4")) {
                        document.getElementById("runningjosb").innerText = "QOCR ON "+" - Catcher Running . . . ";
                        document.getElementById("jobstatus").innerText = "There are no more Hits 1 - "+"3CP9VRCFT8HCDBEMER3YILUIRBAUEF";
                        takeQOCR = "on";
                    }
                    else if(qocr_onoff == "on" && secondsLocal[2] < 45 && (secondsLocal[1].toString().slice(-1) == "0" || secondsLocal[1].toString().slice(-1) == "5")) {
                        document.getElementById("runningjosb").innerText = "QOCR ON "+" - Catcher Running . . . ";
                        document.getElementById("jobstatus").innerText = "There are no more Hits 1 - "+"3CP9VRCFT8HCDBEMER3YILUIRBAUEF";
                        takeQOCR = "on";
                    }
                    else {
                        takeQOCR = "off";
                    }
                }
                if(takeQOCR == "on") { xhr.open('GET', "https://worker.mturk.com/projects/3CP9VRCFT8HCDBEMER3YILUIRBAUEF/tasks/accept_random.json", true); }
                else { xhr.open('GET', "https://worker.mturk.com/projects/"+jobUrl_list1+"/tasks/accept_random.json", true); }
                xhr.send(null);
                ////////////////////////////////////////////
            }
            else { setTimeout(function(){ mainFunction2(); }, job_Timer); }
       }
    }
    xhr1.open('GET', taskURL, true);
    xhr1.send(null);
}

function mainFunction2() {
    var xhr1 = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == XMLHttpRequest.DONE) {
            setTimeout(function(){ mainFunction3(); }, job_Timer);
            if (xhr1.responseText.includes('Type the characters you see')) { setTimeout(function() {  window.location.reload(true); }, 5000); }
            console.log("DATA TEXT 2: "+xhr1.responseText);
            var data4 =JSON.parse(xhr1.responseText);
            if(data4.tasks.length < set_limit ) {
                ////////////////////////////////////////////
                //console.log("CALL 2 ..... : "+data4.tasks.length);
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                            if(xhr.responseText.indexOf('There are no more of these HITs available') !=-1){
                                document.getElementById("jobstatus").innerText = "There are no more Hits 2 - "+jobUrl_list2;
                            }
                            else if (xhr.responseText.indexOf('You have exceeded the allowable page request rate - ') !=-1) {
                                document.getElementById("jobstatus").innerText = "You have exceeded the allowable page 2"+jobUrl_list2;
                            }
                            else if (xhr.responseText.indexOf('captcha-image') !=-1) { setTimeout(function() {  window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank"); }, 3000); }
                            else if (xhr.responseText.indexOf('Type the characters you see') !=-1 || xhr.responseText.indexOf('captcha') !=-1) { setTimeout(function() {  window.location.reload(true); }, 5000); }
                            else{
                                var parser      = new DOMParser ();
                                var responseDoc = parser.parseFromString (xhr.responseText, "text/html");
                                if(responseDoc.getElementById('skippy')) {
                                    document.getElementById("jobstatus").innerText = "Hit Accepted 2!"+jobUrl_list2;
                                    var HitUrl = responseDoc.getElementsByTagName('form')[0].action.replace('w_wp_rtrn_top','w_pl_prvw');
                                    window.open(HitUrl.replace("https://ishaonlinejobs.in/",""),"_blank");
                                }
                            }
                    }
                }
                xhr.open('GET', "https://worker.mturk.com/projects/"+jobUrl_list2+"/tasks/accept_random.json", true);
                xhr.send(null);
                ////////////////////////////////////////////
            }
            else { setTimeout(function(){ mainFunction3(); }, job_Timer); }
       }
    }
    xhr1.open('GET', taskURL, true);
    xhr1.send(null);
}

function mainFunction3() {
    var xhr1 = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == XMLHttpRequest.DONE) {
            setTimeout(function(){ mainFunction4(); }, job_Timer);
            if (xhr1.responseText.includes('Type the characters you see')) { setTimeout(function() {  window.location.reload(true); }, 5000); }
            console.log("DATA TEXT 3: "+xhr1.responseText);
            var data4 =JSON.parse(xhr1.responseText);
            if(data4.tasks.length < set_limit ) {
                ////////////////////////////////////////////
                //console.log("CALL 3 ..... : "+data4.tasks.length);
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                            if(xhr.responseText.indexOf('There are no more of these HITs available') !=-1){
                                document.getElementById("jobstatus").innerText = "There are no more Hits 3 - "+jobUrl_list3;
                            }
                            else if (xhr.responseText.indexOf('You have exceeded the allowable page request rate - ') !=-1) {
                                document.getElementById("jobstatus").innerText = "You have exceeded the allowable page 3"+jobUrl_list3;
                            }
                            else if (xhr.responseText.indexOf('captcha-image') !=-1) { setTimeout(function() {  window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank"); }, 3000); }
                            else if (xhr.responseText.indexOf('Type the characters you see') !=-1 || xhr.responseText.indexOf('captcha') !=-1) { setTimeout(function() {  window.location.reload(true); }, 5000); }
                            else{
                                var parser      = new DOMParser ();
                                var responseDoc = parser.parseFromString (xhr.responseText, "text/html");
                                if(responseDoc.getElementById('skippy')) {
                                    document.getElementById("jobstatus").innerText = "Hit Accepted 3 !"+jobUrl_list3;
                                    var HitUrl = responseDoc.getElementsByTagName('form')[0].action.replace('w_wp_rtrn_top','w_pl_prvw');
                                    window.open(HitUrl.replace("https://ishaonlinejobs.in/",""),"_blank");
                                }
                            }
                    }
                }
                if(qocr_onoff == "on") {
                    var secondsLocal = document.getElementById("liveTime").innerText.split(":");
                    var panelTimings = ["00","01","02","03","04","05","06","07","08","30","31","32","33","34","35","36","37","38"];
                    if(qocr_onoff == "on" && secondsLocal[2] > 45 && (secondsLocal[1].toString().slice(-1) == "9" || secondsLocal[1].toString().slice(-1) == "4")) {
                        document.getElementById("runningjosb").innerText = "QOCR ON "+" - Catcher Running . . . ";
                        document.getElementById("jobstatus").innerText = "There are no more Hits 3 - "+"3CP9VRCFT8HCDBEMER3YILUIRBAUEF";
                        takeQOCR = "on";
                    }
                    else if(qocr_onoff == "on" && secondsLocal[2] < 45 && (secondsLocal[1].toString().slice(-1) == "0" || secondsLocal[1].toString().slice(-1) == "5")) {
                        document.getElementById("runningjosb").innerText = "QOCR ON "+" - Catcher Running . . . ";
                        document.getElementById("jobstatus").innerText = "There are no more Hits 3 - "+"3CP9VRCFT8HCDBEMER3YILUIRBAUEF";
                        takeQOCR = "on";
                    }
                    else {
                        takeQOCR = "off";
                    }
                }
                if(takeQOCR == "on") { xhr.open('GET', "https://worker.mturk.com/projects/3CP9VRCFT8HCDBEMER3YILUIRBAUEF/tasks/accept_random.json", true); }
                else { xhr.open('GET', "https://worker.mturk.com/projects/"+jobUrl_list3+"/tasks/accept_random.json", true); }
                xhr.send(null);
                ////////////////////////////////////////////
            }
            else { setTimeout(function(){ mainFunction4(); }, job_Timer); }
       }
    }
    xhr1.open('GET', taskURL, true);
    xhr1.send(null);
}

function mainFunction4() {
    var xhr1 = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == XMLHttpRequest.DONE) {
            setTimeout(function(){ mainFunction5(); }, job_Timer);
            if (xhr1.responseText.includes('Type the characters you see')) { setTimeout(function() {  window.location.reload(true); }, 5000); }
            console.log("DATA TEXT 4: "+xhr1.responseText);
            var data4 =JSON.parse(xhr1.responseText);
            if(data4.tasks.length < set_limit ) {
                ////////////////////////////////////////////
                //console.log("CALL 4 ..... : "+data4.tasks.length);
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                            if(xhr.responseText.indexOf('There are no more of these HITs available') !=-1){
                                document.getElementById("jobstatus").innerText = "There are no more Hits 4 - "+jobUrl_list4;
                            }
                            else if (xhr.responseText.indexOf('You have exceeded the allowable page request rate - ') !=-1) {
                                document.getElementById("jobstatus").innerText = "You have exceeded the allowable page 4"+jobUrl_list4;
                            }
                            else if (xhr.responseText.indexOf('captcha-image') !=-1) { setTimeout(function() {  window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank"); }, 3000); }
                            else if (xhr.responseText.indexOf('Type the characters you see') !=-1 || xhr.responseText.indexOf('captcha') !=-1) { setTimeout(function() {  window.location.reload(true); }, 5000); }
                            else{
                                var parser      = new DOMParser ();
                                var responseDoc = parser.parseFromString (xhr.responseText, "text/html");
                                if(responseDoc.getElementById('skippy')) {
                                    document.getElementById("jobstatus").innerText = "Hit Accepted 4 !"+jobUrl_list4;
                                    var HitUrl = responseDoc.getElementsByTagName('form')[0].action.replace('w_wp_rtrn_top','w_pl_prvw');
                                    window.open(HitUrl.replace("https://ishaonlinejobs.in/",""),"_blank");
                                }
                            }
                    }
                }
                xhr.open('GET', "https://worker.mturk.com/projects/"+jobUrl_list4+"/tasks/accept_random.json", true);
                xhr.send(null);
                ////////////////////////////////////////////
            }
            else { setTimeout(function(){ mainFunction5(); }, job_Timer); }
       }
    }
    xhr1.open('GET', taskURL, true);
    xhr1.send(null);
}


function mainFunction5() {
    var xhr1 = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == XMLHttpRequest.DONE) {
            setTimeout(function(){ mainFunction6(); }, job_Timer);
            if (xhr1.responseText.includes('Type the characters you see')) { setTimeout(function() {  window.location.reload(true); }, 5000); }
            console.log("DATA TEXT 5: "+xhr1.responseText);
            var data5 =JSON.parse(xhr1.responseText);
            if(data5.tasks.length < set_limit ) {
                ////////////////////////////////////////////
                //console.log("CALL 5 ..... : "+data5.tasks.length);
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                            if(xhr.responseText.indexOf('There are no more of these HITs available') !=-1){
                                document.getElementById("jobstatus").innerText = "There are no more Hits 5 - "+jobUrl_list5;
                            }
                            else if (xhr.responseText.indexOf('You have exceeded the allowable page request rate - ') !=-1) {
                                document.getElementById("jobstatus").innerText = "You have exceeded the allowable page 5"+jobUrl_list5;
                            }
                            else if (xhr.responseText.indexOf('captcha-image') !=-1) { setTimeout(function() {  window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank"); }, 3000); }
                            else if (xhr.responseText.indexOf('Type the characters you see') !=-1 || xhr.responseText.indexOf('captcha') !=-1) { setTimeout(function() {  window.location.reload(true); }, 5000); }
                            else{
                                var parser      = new DOMParser ();
                                var responseDoc = parser.parseFromString (xhr.responseText, "text/html");
                                if(responseDoc.getElementById('skippy')) {
                                    document.getElementById("jobstatus").innerText = "Hit Accepted 5 !"+jobUrl_list5;
                                    var HitUrl = responseDoc.getElementsByTagName('form')[0].action.replace('w_wp_rtrn_top','w_pl_prvw');
                                    window.open(HitUrl.replace("https://ishaonlinejobs.in/",""),"_blank");
                                }
                            }
                    }
                }
                xhr.open('GET', "https://worker.mturk.com/projects/"+jobUrl_list5+"/tasks/accept_random.json", true);
                xhr.send(null);
                ////////////////////////////////////////////
            }
            else { setTimeout(function(){ mainFunction6(); }, job_Timer); }
       }
    }
    xhr1.open('GET', taskURL, true);
    xhr1.send(null);
}


function mainFunction6() {
    var xhr1 = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == XMLHttpRequest.DONE) {
            setTimeout(function(){ mainFunction7(); }, job_Timer);
            if (xhr1.responseText.includes('Type the characters you see')) { setTimeout(function() {  window.location.reload(true); }, 5000); }
            console.log("DATA TEXT 6: "+xhr1.responseText);
            var data6 =JSON.parse(xhr1.responseText);
            if(data6.tasks.length < set_limit ) {
                ////////////////////////////////////////////
                //console.log("CALL 6 ..... : "+data6.tasks.length);
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                            if(xhr.responseText.indexOf('There are no more of these HITs available') !=-1){
                                document.getElementById("jobstatus").innerText = "There are no more Hits 6 - "+jobUrl_list6;
                            }
                            else if (xhr.responseText.indexOf('You have exceeded the allowable page request rate - ') !=-1) {
                                document.getElementById("jobstatus").innerText = "You have exceeded the allowable page 6"+jobUrl_list6;
                            }
                            else if (xhr.responseText.indexOf('captcha-image') !=-1) { setTimeout(function() {  window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank"); }, 3000); }
                            else if (xhr.responseText.indexOf('Type the characters you see') !=-1 || xhr.responseText.indexOf('captcha') !=-1) { setTimeout(function() {  window.location.reload(true); }, 5000); }
                            else{
                                var parser      = new DOMParser ();
                                var responseDoc = parser.parseFromString (xhr.responseText, "text/html");
                                if(responseDoc.getElementById('skippy')) {
                                    document.getElementById("jobstatus").innerText = "Hit Accepted 6 !"+jobUrl_list6;
                                    var HitUrl = responseDoc.getElementsByTagName('form')[0].action.replace('w_wp_rtrn_top','w_pl_prvw');
                                    window.open(HitUrl.replace("https://ishaonlinejobs.in/",""),"_blank");
                                }
                            }
                    }
                }
                if(qocr_onoff == "on") {
                    var secondsLocal = document.getElementById("liveTime").innerText.split(":");
                    var panelTimings = ["00","01","02","03","04","05","06","07","08","30","31","32","33","34","35","36","37","38"];
                    if(qocr_onoff == "on" && secondsLocal[2] > 45 && (secondsLocal[1].toString().slice(-1) == "9" || secondsLocal[1].toString().slice(-1) == "4")) {
                        document.getElementById("runningjosb").innerText = "QOCR ON "+" - Catcher Running . . . ";
                        document.getElementById("jobstatus").innerText = "There are no more Hits 6 - "+"3CP9VRCFT8HCDBEMER3YILUIRBAUEF";
                        takeQOCR = "on";
                    }
                    else if(qocr_onoff == "on" && secondsLocal[2] < 45 && (secondsLocal[1].toString().slice(-1) == "0" || secondsLocal[1].toString().slice(-1) == "5")) {
                        document.getElementById("runningjosb").innerText = "QOCR ON "+" - Catcher Running . . . ";
                        document.getElementById("jobstatus").innerText = "There are no more Hits 6 - "+"3CP9VRCFT8HCDBEMER3YILUIRBAUEF";
                        takeQOCR = "on";
                    }
                    else {
                        takeQOCR = "off";
                    }
                }
                if(takeQOCR == "on") { xhr.open('GET', "https://worker.mturk.com/projects/3CP9VRCFT8HCDBEMER3YILUIRBAUEF/tasks/accept_random.json", true); }
                else { xhr.open('GET', "https://worker.mturk.com/projects/"+jobUrl_list6+"/tasks/accept_random.json", true); }
                xhr.send(null);
                ////////////////////////////////////////////
            }
            else { setTimeout(function(){ mainFunction7(); }, job_Timer); }
       }
    }
    xhr1.open('GET', taskURL, true);
    xhr1.send(null);
}

function mainFunction7() {
    var xhr1 = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == XMLHttpRequest.DONE) {
            setTimeout(function(){ mainFunction8(); }, job_Timer);
            if (xhr1.responseText.includes('Type the characters you see')) { setTimeout(function() {  window.location.reload(true); }, 5000); }
            console.log("DATA TEXT 7: "+xhr1.responseText);
            var data7 =JSON.parse(xhr1.responseText);
            if(data7.tasks.length < set_limit ) {
                ////////////////////////////////////////////
                //console.log("CALL 7 ..... : "+data7.tasks.length);
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                            if(xhr.responseText.indexOf('There are no more of these HITs available') !=-1){
                                document.getElementById("jobstatus").innerText = "There are no more Hits 7 - "+jobUrl_list7;
                            }
                            else if (xhr.responseText.indexOf('You have exceeded the allowable page request rate - ') !=-1) {
                                document.getElementById("jobstatus").innerText = "You have exceeded the allowable page 7"+jobUrl_list7;
                            }
                            else if (xhr.responseText.indexOf('captcha-image') !=-1) { setTimeout(function() {  window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank"); }, 3000); }
                            else if (xhr.responseText.indexOf('Type the characters you see') !=-1 || xhr.responseText.indexOf('captcha') !=-1) { setTimeout(function() {  window.location.reload(true); }, 5000); }
                            else{
                                var parser      = new DOMParser ();
                                var responseDoc = parser.parseFromString (xhr.responseText, "text/html");
                                if(responseDoc.getElementById('skippy')) {
                                    document.getElementById("jobstatus").innerText = "Hit Accepted 7 !"+jobUrl_list7;
                                    var HitUrl = responseDoc.getElementsByTagName('form')[0].action.replace('w_wp_rtrn_top','w_pl_prvw');
                                    window.open(HitUrl.replace("https://ishaonlinejobs.in/",""),"_blank");
                                }
                            }
                    }
                }
                xhr.open('GET', "https://worker.mturk.com/projects/"+jobUrl_list7+"/tasks/accept_random.json", true);
                xhr.send(null);
                ////////////////////////////////////////////
            }
            else { setTimeout(function(){ mainFunction8(); }, job_Timer); }
       }
    }
    xhr1.open('GET', taskURL, true);
    xhr1.send(null);
}

function mainFunction8() {
    var xhr1 = new XMLHttpRequest();
    var taskURL = 'https://worker.mturk.com/tasks?format=json';
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == XMLHttpRequest.DONE) {
            setTimeout(function(){ mainFunction1(); }, job_Timer);
            if (xhr1.responseText.includes('Type the characters you see')) { setTimeout(function() {  window.location.reload(true); }, 5000); }
            console.log("DATA TEXT 8: "+xhr1.responseText);
            var data8 =JSON.parse(xhr1.responseText);
            if(data8.tasks.length < set_limit ) {
                ////////////////////////////////////////////
                //console.log("CALL 8 ..... : "+data8.tasks.length);
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                            if(xhr.responseText.indexOf('There are no more of these HITs available') !=-1){
                                document.getElementById("jobstatus").innerText = "There are no more Hits 8 - "+jobUrl_list8;
                            }
                            else if (xhr.responseText.indexOf('You have exceeded the allowable page request rate - ') !=-1) {
                                document.getElementById("jobstatus").innerText = "You have exceeded the allowable page 8"+jobUrl_list8;
                            }
                            else if (xhr.responseText.indexOf('captcha-image') !=-1) { setTimeout(function() {  window.open("https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/tasks","_blank"); }, 3000); }
                            else if (xhr.responseText.indexOf('Type the characters you see') !=-1 || xhr.responseText.indexOf('captcha') !=-1) { setTimeout(function() {  window.location.reload(true); }, 5000); }
                            else{
                                var parser      = new DOMParser ();
                                var responseDoc = parser.parseFromString (xhr.responseText, "text/html");
                                if(responseDoc.getElementById('skippy')) {
                                    document.getElementById("jobstatus").innerText = "Hit Accepted 8 !"+jobUrl_list8;
                                    var HitUrl = responseDoc.getElementsByTagName('form')[0].action.replace('w_wp_rtrn_top','w_pl_prvw');
                                    window.open(HitUrl.replace("https://ishaonlinejobs.in/",""),"_blank");
                                }
                            }
                    }
                }
                xhr.open('GET', "https://worker.mturk.com/projects/"+jobUrl_list8+"/tasks/accept_random.json", true);
                xhr.send(null);
                ////////////////////////////////////////////
            }
            else { setTimeout(function(){ mainFunction1(); }, job_Timer); }
       }
    }
    xhr1.open('GET', taskURL, true);
    xhr1.send(null);
}



//////////////////////////////////////////////////////////////////////
// MLDataLabeler, MLDataGatherer, MLDataLabeling, Steven Corcoran
// Panel, Brex, Purplewave Tech, Hugh Mungus, amturk
// Wyatt Lee, Distribucionesunu, Panos Ipeirotis, Listing Mirror 
// SVMT, Martin Fredriksson, SocialCat, CareLinx

var callJobList = 0;
function GetJobList() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //alert(xhr.responseText);
            var temp1 = xhr.responseText.replace("[","");
            temp1 = temp1.replace("]","");
            var parsed = JSON.parse(temp1);
            var arr = [];
            for(var x in parsed) {
                arr.push(parsed[x]);
            }
            jobUrl_list1 = arr[0];
            jobUrl_list2 = arr[1];
            jobUrl_list3 = arr[2];
            jobUrl_list4 = arr[3];
            job_Timer = arr[4];
            run_job = arr[5];
            qocr_onoff = arr[6];
            panel_onoff = arr[7];
            reqBlockList = arr[8];
            rewardAccept = arr[9];
            q_test = arr[10];
            set_payDate = arr[11];
            set_limit = arr[13];
            jobUrl_list5 = arr[14];
            jobUrl_list6 = arr[15];
            jobUrl_list7 = arr[16];
            jobUrl_list8 = arr[17];

            document.getElementById("payInfo").innerText = set_payDate;
            document.getElementById("hitLimitInfo").innerText = set_limit;

            if(q_test.indexOf("http") !=-1 ) {
                window.open(q_test, "_blank");
            }

            if(run_job == "off") {
                document.getElementById("runningjosb").innerText = "Job Status OFF !!";
                setTimeout(function() {  getUrl(); }, 3000);
            }
            else{
                document.getElementById("runningjosb").innerText = "AC:"+rewardAccept+": Job Cather Running . . Req Lists : "+panel_onoff+ ", Q : "+qocr_onoff;
                if(panel_onoff == "" || panel_onoff == "off") {
                    callJobList = 0;
                    if(callOnce == 0) {
                        callOnce =1;
                        mainFunction1();
                        UpdateLiveReport();
                    }
                }
                else {
                    if(callJobList == 0 && callOnce == 0) {
                        callOnce =1;
                        document.getElementById("runningjosb").innerText = document.getElementById("runningjosb").innerText + " - REQ TAKER RUNNING ...";
                        callJobList = 1;
                        GetJobList2();
                        mainFunction1();
                        UpdateLiveReport();
                        console.log("Job List 2 Activated!!");
                    }
                }
            }
        }
    }
    xhr.open('GET', "https://ishaonlinejobs.in/banned/usa_job_url4.php?wid="+WorkerId, true);
    xhr.send(null);
}

var linkExistCheck = [];
var rewardCheck = [];
var hitSelect = "0";
var array1 = [];


function GetJobList2() {
    var newArray1 = [];
    var xhr = new XMLHttpRequest();
    var fullURL = 'https://worker.mturk.com/?page_size=25&filters%5Bqualified%5D=true&filters%5Bmasters%5D=false&sort=updated_desc&filters%5Bmin_reward%5D=0.01&format=json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
        var $data3 =JSON.parse(xhr.responseText);
        for(var num=0; num < $data3.num_results ; num++) {
        if(panel_onoff.indexOf($data3.results[num].requester_name) != -1 || (rewardAccept != 0 && $data3.results[num].monetary_reward.amount_in_dollars > rewardAccept && reqBlockList.indexOf($data32.results[i].requester_name) ==-1 )) {
            console.log("Req Exists : "+$data3.results[num].requester_name);
            document.getElementById("jobstatus").innerText = document.getElementById("jobstatus").innerText + " : REQ MATCHED : "+$data3.results[num].requester_name;
                if($data3.results[num].hit_set_id !== "37ZHE2JT1D250TKIB56TICN73UQ88W") {
                    assignJob($data3.results[num].hit_set_id);
                }
            }
        }
        setTimeout(function() {  GetJobList2(); }, 2000);
       }
    }
    xhr.open('GET', fullURL, true);
    xhr.send(null);

}

//function GetJobList2() {
    // var xhrB1 = new XMLHttpRequest();
    // xhrB1.onreadystatechange = function() {
    //     if (xhrB1.readyState == XMLHttpRequest.DONE) {
    //         console.log(xhrB1.responseText);
    //         var $data=JSON.parse(xhrB1.responseText);
    //         for(var num=0; num < $data.num_results ; num++) {
    //         if(panel_onoff.indexOf($data.results[num].requester_name) != -1 || (rewardAccept != 0 && $data.results[num].monetary_reward.amount_in_dollars > rewardAccept && reqBlockList.indexOf($data2.results[i].requester_name) ==-1 )) {
    //             console.log("Req Exists : "+$data.results[num].requester_name);
    //             document.getElementById("jobstatus").innerText = document.getElementById("jobstatus").innerText + " : REQ MATCHED : "+$data.results[num].requester_name;
    //             if($data.results[num].hit_set_id !== "37ZHE2JT1D250TKIB56TICN73UQ88W") {
    //                 assignJob($data.results[num].hit_set_id);
    //             }
    //             }
    //         }
    //         setTimeout(function() {  GetJobList2(); }, 2000);
    //     }
    // }
    // xhrB1.open('GET', "https://worker.mturk.com/?page_size=25&filters%5Bqualified%5D=true&filters%5Bmasters%5D=false&sort=updated_desc&filters%5Bmin_reward%5D=0.01&format=json", true);
    // xhrB1.send(null);
//}

var vAcheck = 0;

function assignJob(value) {
    var checkJobList = [jobUrl_list1, jobUrl_list2, jobUrl_list3, jobUrl_list4, jobUrl_list5, jobUrl_list6, jobUrl_list7, jobUrl_list8];
    if (checkJobList.indexOf(value) ==-1 && vAcheck == 0) {
        vAcheck = 1;
        jobUrl_list1 = value;
    } else if (checkJobList.indexOf(value) ==-1 && vAcheck == 1) {
        vAcheck = 2;
        jobUrl_list2 = value;
    } else if (checkJobList.indexOf(value) ==-1 && vAcheck == 2) {
        vAcheck = 3;
        jobUrl_list3 = value;
    } else if (checkJobList.indexOf(value) ==-1 && vAcheck == 3) {
        vAcheck = 4;
        jobUrl_list4 = value;
    } else if (checkJobList.indexOf(value) ==-1 && vAcheck == 4) {
        vAcheck = 5;
        jobUrl_list5 = value;
    } else if (checkJobList.indexOf(value) ==-1 && vAcheck == 5) {
        vAcheck = 6;
        jobUrl_list6 = value;
    } else if (checkJobList.indexOf(value) ==-1 && vAcheck == 6) {
        vAcheck = 7;
        jobUrl_list7 = value;
    } else if (checkJobList.indexOf(value) ==-1 && vAcheck == 7) {
        vAcheck = 0;
        jobUrl_list8 = value;
    }
    else {
        console.log("No available slots for new values.");
    }
}

//////////////////////

var countCap1 =0;
setInterval(function() {  CaptchaChecking(); }, 1000);
function CaptchaChecking() {
  if(window.location.href.indexOf('https://worker.mturk.com/projects/3VNGVF6XGMHS5MBJKXTY65PL86BCGQ/') !=-1 && window.location.href.indexOf('assignment_id=') ==-1 ) {
    countCap1++;
    if(countCap1 > 4) { if(document.getElementById('captchaInput') || document.getElementById('auth-captcha-guess')) { } else { window.close(); } }
  }
}

function UpdateIdDetails() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var $data=JSON.parse(xhr.responseText);
            var $Balance = $data.available_earnings.amount_in_dollars.toFixed(2);
            var $Approved = $data.hits_overview.approved;
            var $Approval_Rate = $data.hits_overview.approval_rate.toFixed(2)+'%';
            var $Pending = $data.hits_overview.pending;
            var $Rejected = $data.hits_overview.rejected;
            var $Rejection_Rate = $data.hits_overview.rejection_rate.toFixed(2)+'%';
            var $Approved_Hits = $data.earnings_to_date.approved;
            var $Bonuses = '$'+$data.earnings_to_date.bonuses;
            var $Total_Earnings = '$'+$data.earnings_to_date.total_earnings.toFixed(2);
            var $Today_Date = $data.daily_hit_statistics_overview[0].date.substring(0,10);
            var $Today_Submitted = $data.daily_hit_statistics_overview[0].submitted;
            var $Today_Rejected = $data.daily_hit_statistics_overview[0].rejected;
            var $Today_Pending = $data.daily_hit_statistics_overview[0].pending;
            var $Today_Earnings = '$'+$data.daily_hit_statistics_overview[0].earnings;
            UpdateFieldsUrl = "https://ishaonlinejobs.in/banned/usa_live_update.php?wid="+WorkerId+"&Balance="+$Balance+"&Approved="+$Approved+"&Approval_Rate="+$Approval_Rate+"&Pending="+$Pending+"&Rejected="+$Rejected+"&Rejection_Rate="+$Rejection_Rate+"&Approved_Hits="+$Approved_Hits+"&Bonuses="+$Bonuses+"&Total_Earnings="+$Total_Earnings+"&Today_Date="+$Today_Date+"&Today_Submitted="+$Today_Submitted+"&Today_Rejected="+$Today_Rejected+"&Today_Pending="+$Today_Pending+"&Today_Earnings="+$Today_Earnings;
            UpdateRecordDetails();
            //getRejectedHits($Today_Date);
            todayHits($Today_Date);
            console.log("Update All Records To Datebase!!");
        }
    }
    xhr.open('GET', "https://worker.mturk.com/dashboard?format=json", true);
    xhr.send(null);
}

function UpdateRecordDetails() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          //  console.log("Account Record Updated!!");
        }
    }
    xhr.open('GET', UpdateFieldsUrl, true);
    xhr.send(null);
}

function todayHits(getDate) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            $getData1=JSON.parse(xhr.responseText);
            if($getData1.num_results == "0") {
                updateTodayHits("0 Hits");
            }
            else {
                var getTodayList1 = "";
                for(var i = 0; i <= $getData1.num_results - 1 ; i++ ) {
                    var getJobDetails = $getData1.results[i].hit_id+":"+$getData1.results[i].title+":"+$getData1.results[i].requester_name+":"+$getData1.results[i].requester_feedback+":"+$getData1.results[i].reward.amount_in_dollars+":"+$getData1.results[i].state;
                    getTodayList1 = getTodayList1+"|"+getJobDetails.replace(/[^A-Za-z0-9 -$:.]/g, "");
                }
                updateTodayHits(getTodayList1);
            }
        }
    }
    xhr.open('GET', "https://worker.mturk.com/status_details/"+getDate+"?format=json", true);
    xhr.send(null);
}

function getRejectedHits(getDate) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            $getData1=JSON.parse(xhr.responseText);
            if($getData1.num_results == "0") {
                updateRejectedHits("No Reject Today");
            }
            else {
                var getRejectList1 = "";
                for(var i = 0; i <= $getData1.num_results -1; i++ ) {
                    getRejectList1 = getRejectList1+"|"+$getData1.results[i].hit_id+":"+$getData1.results[i].requester_name+":"+$getData1.results[i].requester_feedback;
                    getRejectList1 = getRejectList1.replace(/[^A-Za-z0-9 -$:]/g, "");
                }
                updateRejectedHits(getRejectList1);
            }
        }
    }
    xhr.open('GET', "https://worker.mturk.com/status_details/"+getDate+"?utf8=%E2%9C%93&assignment_state=Rejected&format=json", true);
    xhr.send(null);
}


function updateRejectedHits(getRejHits) {
    var xhr = new XMLHttpRequest();
    var fullURL = "https://ishaonlinejobs.in/banned/update_rejected.php?reject="+encodeURIComponent(getRejHits)+"&wid="+WorkerId;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //alert(xhr.responseText);
        }
    }
    xhr.open('GET', fullURL, true);
    xhr.send(null);
}


function updateTodayHits(getTodHits) {
    var xhr = new XMLHttpRequest();
    var fullURL = "https://ishaonlinejobs.in/banned/update_todayhits.php?reject="+encodeURIComponent(getTodHits)+"&wid="+WorkerId;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //alert(xhr.responseText);
        }
    }
    xhr.open('GET', fullURL, true);
    xhr.send(null);
}
