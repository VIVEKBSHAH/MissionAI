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
    div.style.background = "#ffffff";
    div.style.color = "#1f2937";
    div.style.fontFamily = "Arial, sans-serif";
    div.style.textAlign = "center";
    div.style.border = "10px solid #1f6feb";
    div.style.boxSizing = "border-box";
    div.style.padding = "40px";

    div.innerHTML = `

<div style="
border:2px solid #d1d5db;
padding:45px;
box-sizing:border-box;
">

<h1 style="
font-size:58px;
letter-spacing:8px;
margin:0;
color:#1f6feb;
font-weight:700;
">
MISSION AI
</h1>

<h2 style="
font-size:38px;
margin:25px 0 45px;
color:#111827;
font-weight:700;
">
CERTIFICATE OF ACHIEVEMENT
</h2>

<p style="
font-size:22px;
margin:0;
color:#4b5563;
">
This certificate is proudly presented to
</p>

<h1 style="
font-size:60px;
margin:22px 0;
color:#111827;
font-weight:700;
line-height:1.2;
word-break:break-word;
">
${player}
</h1>

<p style="
font-size:22px;
color:#4b5563;
margin:0;
">
for successfully completing
</p>

<h2 style="
font-size:34px;
color:#1f6feb;
margin:18px 0 40px;
">
Operations Driven by AI
</h2>

<div style="
display:flex;
justify-content:space-around;
align-items:flex-start;
margin:40px 0;
font-size:24px;
">

<div>
<div style="font-weight:bold;">Score</div>
<div style="margin-top:10px;font-size:42px;color:#1f6feb;">
${score}/5
</div>
</div>

<div>
<div style="font-weight:bold;">Achievement</div>
<div style="margin-top:10px;font-size:24px;line-height:1.4;">
${title}
</div>
</div>

</div>

<hr style="
border:none;
border-top:2px solid #d1d5db;
margin:45px 0 30px;
">

<div style="
font-size:20px;
color:#4b5563;
margin-bottom:12px;
">
Issued Date: ${date}
</div>

<div style="
font-size:20px;
color:#4b5563;
">
Presented by: Mission AI Team
</div>

</div>

`;

    document.body.appendChild(div);

    html2canvas(div, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff"
    }).then(canvas => {

        const link = document.createElement("a");

        link.download = "MissionAI_Certificate.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

        div.remove();

    });

}