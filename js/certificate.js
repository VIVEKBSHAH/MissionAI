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
    div.style.background = "linear-gradient(135deg,#071320,#10253f)";
    div.style.color = "#fff";
    div.style.padding = "35px";
    div.style.fontFamily = "Poppins, Arial, sans-serif";
    div.style.textAlign = "center";
    div.style.border = "8px solid #FFD700";
    div.style.borderRadius = "14px";
    div.style.boxSizing = "border-box";

    div.innerHTML = `

<div style="
border:2px solid rgba(255,255,255,.12);
border-radius:10px;
padding:40px;
">

<h1 style="
font-size:56px;
letter-spacing:8px;
margin:0;
color:#38bdf8;
font-weight:700;
">
MISSION AI
</h1>

<h2 style="
font-size:30px;
margin:12px 0 35px;
font-weight:600;
color:white;
">
Certificate of Achievement
</h2>

<p style="
font-size:18px;
color:#cbd5e1;
margin:0;
">
This certificate is proudly presented to
</p>

<h1 style="
font-size:46px;
margin:18px 0;
font-weight:bold;
color:white;
line-height:1.25;
word-break:break-word;
">
${player}
</h1>

<p style="
font-size:18px;
color:#cbd5e1;
margin:0;
">
for successfully completing
</p>

<h2 style="
font-size:28px;
color:#38bdf8;
margin:15px 0 35px;
font-weight:600;
">
Operations Driven by AI
</h2>

<div style="
display:flex;
justify-content:space-evenly;
margin:25px 0 35px;
">

<div>

<div style="
font-size:18px;
color:#cbd5e1;
">
Score
</div>

<div style="
font-size:40px;
font-weight:bold;
color:#FFD700;
margin-top:8px;
">
${score}/5
</div>

</div>

<div>

<div style="
font-size:18px;
color:#cbd5e1;
">
Achievement
</div>

<div style="
font-size:22px;
font-weight:600;
margin-top:8px;
line-height:1.4;
max-width:250px;
">
${title}
</div>

</div>

</div>

<hr style="
border:none;
border-top:2px solid rgba(255,215,0,.35);
margin:30px auto;
width:85%;
">

<div style="
font-size:17px;
color:#38bdf8;
font-weight:bold;
margin-bottom:15px;
">
🏆 Excellence in AI-Powered Operations
</div>

<div style="
display:flex;
justify-content:space-between;
color:#cbd5e1;
font-size:15px;
margin-top:20px;
">

<div>
<b>Issued:</b><br>
${date}
</div>

<div>
<b>Presented By:</b><br>
Mission AI Team
</div>

</div>

</div>

`;

    document.body.appendChild(div);

    html2canvas(div,{
        scale:2,
        useCORS:true,
        backgroundColor:null
    }).then(canvas=>{

        const link=document.createElement("a");

        link.download="MissionAI_Certificate.png";

        link.href=canvas.toDataURL("image/png");

        link.click();

        div.remove();

    });

}