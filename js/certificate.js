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
    div.style.background = "#ffffff";
    div.style.color = "#1f2937";
    div.style.fontFamily = "Segoe UI, Arial, sans-serif";
    div.style.textAlign = "center";
    div.style.border = "10px solid #1f6feb";
    div.style.boxSizing = "border-box";
    div.style.padding = "55px";
    div.style.position = "relative";


    div.innerHTML = `

<div style="
height:100%;
border:2px solid #d1d5db;
padding:45px;
box-sizing:border-box;
">


<h1 style="
font-size:55px;
letter-spacing:8px;
margin:0;
color:#1f6feb;
font-weight:700;
">
MISSION AI
</h1>


<h2 style="
font-size:36px;
margin:25px 0;
color:#111827;
">
CERTIFICATE OF ACHIEVEMENT
</h2>


<p style="
font-size:22px;
margin-top:45px;
color:#4b5563;
">
This certificate is proudly presented to
</p>



<h1 style="
font-size:58px;
margin:20px 0;
color:#111827;
font-weight:700;
">
${player}
</h1>



<p style="
font-size:22px;
color:#4b5563;
">
for successfully completing
</p>



<h2 style="
font-size:32px;
color:#1f6feb;
margin:15px;
">
AI Operations Mission Challenge
</h2>



<div style="
display:flex;
justify-content:center;
gap:140px;
margin-top:45px;
font-size:22px;
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
position:absolute;
bottom:80px;
left:0;
right:0;
font-size:18px;
color:#4b5563;
">

Issued Date: ${date}

</div>



<div style="
position:absolute;
bottom:35px;
left:0;
right:0;
font-size:18px;
color:#4b5563;
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