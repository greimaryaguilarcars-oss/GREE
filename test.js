async function probarLead() {
    try {
        const respuesta = await fetch('http://localhost:3000/add-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Carlos Pérez",
                phone: "+584121234567",
                status: "Lead"
            })
        });

        const resultado = await respuesta.json();
        console.log("📥 Respuesta del servidor:", resultado);
    } catch (error) {
        console.error("❌ Error al probar:", error);
    }
}

probarLead();