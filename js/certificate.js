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
    div.style.padding = "45px";
    div.style.boxSizing = "border-box";
    div.style.background = "linear-gradient(135deg,#071320,#10253f)";
    div.style.border = "6px solid #FFD54A";
    div.style.borderRadius = "16px";
    div.style.fontFamily = "'Poppins', Arial, sans-serif";
    div.style.color = "white";
    div.style.textAlign = "center";

    div.innerHTML = `

<div style="
border:2px solid rgba(255,255,255,.18);
border-radius:12px;
padding:45px;
box-sizing:border-box;
">

<div style="
font-size:56px;
font-weight:700;
letter-spacing:8px;
color:#38bdf8;
">
MISSION AI
</div>

<div style="
font-size:30px;
margin-top:15px;
font-weight:600;
letter-spacing:2px;
">
CERTIFICATE OF ACHIEVEMENT
</div>

<p style="
margin-top:45px;
font-size:21px;
color:#cbd5e1;
">
This certificate is proudly presented to
</p>

<div style="
font-size:56px;
font-weight:700;
margin:18px 0;
line-height:1.2;
word-break:break-word;
color:#ffffff;
">
${player}
</div>

<p style="
font-size:20px;
color:#cbd5e1;
margin-bottom:10px;
">
for successfully completing
</p>

<div style="
font-size:30px;
font-weight:600;
color:#38bdf8;
margin-bottom:40px;
">
Operations Driven by AI
</div>

<div style="
display:flex;
justify-content:space-evenly;
margin:35px 0 45px;
">

<div>
<div style="
font-size:20px;
color:#94a3b8;
">
Score
</div>

<div style="
font-size:42px;
font-weight:700;
color:#FFD54A;
margin-top:10px;
">
${score}/5
</div>

</div>

<div>

<div style="
font-size:20px;
color:#94a3b8;
">
Achievement
</div>

<div style="
font-size:24px;
font-weight:600;
margin-top:12px;
color:#ffffff;
max-width:320px;
line-height:1.4;
">
${title}
</div>

</div>

</div>

<hr style="
border:none;
border-top:1px solid rgba(255,255,255,.2);
margin:40px 0;
">

<div style="
display:flex;
justify-content:space-between;
font-size:18px;
color:#cbd5e1;
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

<div style="
margin-top:40px;
font-size:18px;
color:#38bdf8;
font-weight:600;
">
🏆 Excellence in AI-Powered Operations
</div>

</div>

`;

    document.body.appendChild(div);

    html2canvas(div, {
        scale: 2,
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {

        const link = document.createElement("a");
        link.download = "MissionAI_Certificate.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

        div.remove();

    });

}