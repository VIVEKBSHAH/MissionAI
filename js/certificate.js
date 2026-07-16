function downloadCertificate() {

    const player = localStorage.getItem("playerName") || "Commander";
    const score = parseInt(localStorage.getItem("score")) || 0;


    let title = "";

    if (score === 5)
        title = "AI Operations Champion";
    else if (score === 4)
        title = "AI Operations Strategist";
    else
        title = "AI Explorer";


    const today = new Date();

    const date = today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });



    const div = document.createElement("div");


    div.style.width = "1000px";
    div.style.height = "700px";
    div.style.background = "linear-gradient(135deg,#071320,#10253f)";
    div.style.color = "white";
    div.style.padding = "30px";
    div.style.fontFamily = "Poppins, Arial, sans-serif";
    div.style.textAlign = "center";
    div.style.border = "8px solid #FFD700";
    div.style.boxSizing = "border-box";



    div.innerHTML = `


<h1 style="
font-size:55px;
letter-spacing:8px;
margin:0;
color:#38bdf8;
">
MISSION AI
</h1>


<h2 style="
font-size:30px;
margin:10px 0 15px;
">
Certificate of Achievement
</h2>


<p style="
font-size:18px;
margin:0;
">
This certificate is proudly presented to
</p>



<h1 style="
font-size:42px;
color:#ffffff;
margin:12px 0;
font-weight:bold;
">
${player}
</h1>



<p style="
font-size:17px;
margin:5px;
">
for successfully completing
</p>



<h2 style="
font-size:26px;
color:#38bdf8;
margin:10px;
">
Operations driven by AI
</h2>



<div style="
display:flex;
justify-content:center;
gap:100px;
margin-top:18px;
font-size:20px;
">


<div>
<b>Score</b>
<br>
${score}/5
</div>


<div>
<b>Achievement</b>
<br>
${title}
</div>


</div>



<hr style="
width:80%;
margin:22px auto;
border:none;
border-top:2px solid rgba(255,215,0,0.4);
">



<p style="
font-size:17px;
color:#38bdf8;
font-weight:bold;
margin:8px;
">
🏆 Excellence in AI-Driven Decision Making
</p>


<div style="
margin-top:8px;
font-size:15px;
color:#cbd5e1;
line-height:1.5;
">

<b>
Mission AI Leadership Challenge 2025
</b>

<br>

Held on: ${date}

</div>



`;



    document.body.appendChild(div);



    html2canvas(div).then(canvas => {


        const link = document.createElement("a");


        link.download = "MissionAI_Certificate.png";


        link.href = canvas.toDataURL("image/png");


        link.click();


        div.remove();


    });

}