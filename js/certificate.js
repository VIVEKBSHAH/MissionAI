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


    div.style.width = "1200px";
    div.style.height = "850px";
    div.style.background = "linear-gradient(120deg,#071320,#172b4d)";
    div.style.color = "white";
    div.style.fontFamily = "Poppins, Arial, sans-serif";
    div.style.textAlign = "center";
    div.style.border = "12px solid #FFD700";
    div.style.boxSizing = "border-box";
    div.style.padding = "55px";
    div.style.position = "relative";


    div.innerHTML = `

<div style="
border:2px solid rgba(255,215,0,0.5);
height:100%;
padding:35px;
box-sizing:border-box;
">


<h1 style="
font-size:70px;
letter-spacing:12px;
margin:0;
color:#38bdf8;
">
MISSION AI
</h1>


<h2 style="
font-size:38px;
margin:15px 0;
color:#ffffff;
">
CERTIFICATE OF ACHIEVEMENT
</h2>



<p style="
font-size:22px;
margin-top:35px;
">
This certificate is proudly presented to
</p>



<h1 style="
font-size:55px;
margin:15px 0;
color:#FFD700;
font-weight:bold;
">
${player}
</h1>



<p style="
font-size:22px;
">
for successfully completing the
</p>



<h2 style="
font-size:32px;
color:#38bdf8;
margin:12px;
">
AI Operations Mission Challenge
</h2>




<div style="
display:flex;
justify-content:center;
gap:120px;
margin-top:35px;
font-size:24px;
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



<div style="
margin-top:45px;
font-size:20px;
color:#cbd5e1;
">


🏆 Excellence in AI-Driven Decision Making


<br><br>


<b>
Mission AI Leadership Challenge 2025
</b>


<br>


Location: Kolkata


<br>


Issued Date: ${date}


</div>




<div style="
position:absolute;
bottom:35px;
left:0;
right:0;
font-size:18px;
color:#cbd5e1;
">

Presented by: Mission AI Team

</div>



</div>

`;



    document.body.appendChild(div);



    html2canvas(div, {
        scale: 2
    }).then(canvas => {


        const link = document.createElement("a");


        link.download = "MissionAI_Certificate.png";


        link.href = canvas.toDataURL("image/png");


        link.click();


        div.remove();


    });

}