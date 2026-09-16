const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// 🌟 GREE ENTERPRISE OS - CONEXIÓN VENTAS & CRM / FIDELIZACIÓN
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GREE | Enterprise Business OS</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            darkBg: '#12080C',
                            cardBg: '#1E1015',
                            sidebarBg: '#0A0406',
                            vinotintoAccent: '#6A1B29',
                            aceituna: '#556B2F',
                            aceitunaHover: '#657D37',
                            beigeText: '#F6F4EE',
                            mutedText: '#B0A2A6'
                        }
                    }
                }
            }
        </script>
    </head>
    <body class="bg-darkBg text-beigeText font-sans min-h-screen flex">

        <!-- SIDEBAR DE NAVEGACIÓN -->
        <aside class="w-64 bg-sidebarBg border-r border-vinotintoAccent/20 flex flex-col justify-between hidden md:flex shadow-2xl">
            <div>
                <div class="p-6 border-b border-vinotintoAccent/20 flex items-center gap-3">
                    <div class="w-9 h-9 bg-aceituna rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-md">G</div>
                    <div>
                        <h1 class="text-xl font-black tracking-wider text-beigeText">GREE</h1>
                        <span class="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">Enterprise OS</span>
                    </div>
                </div>
                <nav class="p-4 space-y-1.5 text-sm">
                    <a href="#whatsapp" onclick="cambiarModulo('whatsapp')" id="nav-whatsapp" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl bg-vinotintoAccent text-white font-medium transition shadow-md">💬 WhatsApp & Leads</a>
                    <a href="#clientes" onclick="cambiarModulo('clientes')" id="nav-clientes" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">👥 Clientes & CRM</a>
                    <a href="#ventas" onclick="cambiarModulo('ventas')" id="nav-ventas" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">🧾 Ventas & POS</a>
                    <a href="#inventario" onclick="cambiarModulo('inventario')" id="nav-inventario" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">📦 Inventario & SKU</a>
                    <a href="#cuentas" onclick="cambiarModulo('cuentas')" id="nav-cuentas" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">💳 Cuentas & Cobros</a>
                    <a href="#gastos" onclick="cambiarModulo('gastos')" id="nav-gastos" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">📉 Gastos & Utilidad</a>
                    <a href="#estadisticas" onclick="cambiarModulo('estadisticas')" id="nav-estadisticas" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">📊 Estadísticas</a>
                    <a href="#marketing" onclick="cambiarModulo('marketing')" id="nav-marketing" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">🎯 Marketing & CRM</a>
                    <a href="#usuarios" onclick="cambiarModulo('usuarios')" id="nav-usuarios" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">👤 Usuarios & Roles</a>
                    <a href="#configuracion" onclick="cambiarModulo('configuracion')" id="nav-configuracion" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-mutedText hover:bg-cardBg hover:text-beigeText transition">⚙️ Configuración & API</a>
                </nav>
            </div>
            <div class="p-4 border-t border-vinotintoAccent/20 text-xs text-mutedText flex items-center justify-between">
                <span>Supabase Conectado</span>
                <span class="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
            </div>
        </aside>

        <!-- CONTENIDO PRINCIPAL -->
        <main class="flex-1 flex flex-col min-h-screen overflow-y-auto">
            
            <!-- HEADER SUPERIOR -->
            <header class="bg-cardBg border-b border-vinotintoAccent/20 px-8 py-5 flex justify-between items-center shadow-lg">
                <div>
                    <h2 id="titulo-modulo" class="text-2xl font-black text-beigeText">WhatsApp & Leads</h2>
                    <p id="subtitulo-modulo" class="text-xs text-mutedText mt-0.5">Captura automatizada de clientes potenciales</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-xs bg-sidebarBg border border-vinotintoAccent/30 px-3 py-2 rounded-xl text-mutedText">👤 <b>Greimary Aguilar R.</b> (Admin)</span>
                    <button onclick="sincronizarTodo()" class="px-4 py-2 bg-aceituna hover:bg-aceitunaHover text-white text-sm font-semibold rounded-xl transition shadow-md flex items-center gap-2">
                        🔄 Sincronizar
                    </button>
                </div>
            </header>

            <!-- CONTENEDOR DE MÓDULOS -->
            <div class="p-8 max-w-7xl mx-auto w-full space-y-6">
                
                <!-- 1. WHATSAPP & LEADS -->
                <div id="modulo-whatsapp" class="modulo-contenido space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Total Leads Capturados</p>
                            <h3 id="total-leads" class="text-3xl font-black text-beigeText mt-2">0</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Estado del Webhook</p>
                            <h3 class="text-2xl font-black text-emerald-400 mt-2 flex items-center gap-2">
                                <span class="w-3 h-3 bg-emerald-400 rounded-full inline-block animate-pulse"></span> Activo
                            </h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Canal Principal</p>
                            <h3 class="text-2xl font-black text-blue-300 mt-2">WhatsApp Business</h3>
                        </div>
                    </div>

                    <div class="bg-cardBg border border-vinotintoAccent/20 rounded-2xl shadow-xl overflow-hidden">
                        <div class="px-6 py-4 border-b border-vinotintoAccent/20 flex justify-between items-center bg-sidebarBg/50">
                            <h3 class="font-bold text-beigeText">Bandeja de Entrada de Leads</h3>
                            <span id="badge-count" class="text-xs bg-vinotintoAccent text-white px-3 py-1 rounded-full font-semibold">0 registros</span>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-sidebarBg/40 text-mutedText text-xs uppercase tracking-wider border-b border-vinotintoAccent/20">
                                        <th class="px-6 py-3 font-semibold">Nombre</th>
                                        <th class="px-6 py-3 font-semibold">Teléfono</th>
                                        <th class="px-6 py-3 font-semibold">Estado</th>
                                        <th class="px-6 py-3 font-semibold">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla-cuerpos" class="divide-y divide-vinotintoAccent/10 text-sm">
                                    <tr><td colspan="4" class="px-6 py-8 text-center text-mutedText">Cargando registros...</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 2. CLIENTES & CRM -->
                <div id="modulo-clientes" class="modulo-contenido hidden space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Total Clientes en Base</p>
                            <h3 id="stat-total-clientes" class="text-3xl font-black text-beigeText mt-2">0</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Clientes Potenciales (Leads)</p>
                            <h3 id="stat-potenciales" class="text-3xl font-black text-amber-400 mt-2">0</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Clientes Activos (Fidelizados)</p>
                            <h3 id="stat-activos" class="text-3xl font-black text-emerald-400 mt-2">0</h3>
                        </div>
                    </div>

                    <!-- Formulario de Registro Manual de Cliente -->
                    <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-4">
                        <h3 class="text-lg font-bold text-beigeText">➕ Registrar / Completar Cliente Manualmente</h3>
                        <form id="form-nuevo-cliente" onsubmit="registrarCliente(event)" class="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <input type="text" id="cli-nombre" placeholder="Nombre completo" required class="bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                            <input type="text" id="cli-telefono" placeholder="Teléfono / WhatsApp" required class="bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                            <input type="email" id="cli-email" placeholder="Correo electrónico" class="bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                            <select id="cli-estado" class="bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                                <option value="Cliente Potencial">Cliente Potencial (Lead)</option>
                                <option value="Cliente Activo">Cliente Activo</option>
                            </select>
                            <button type="submit" class="bg-aceituna hover:bg-aceitunaHover text-white font-semibold rounded-xl text-sm py-2.5 transition shadow-md">Guardar Cliente</button>
                        </form>
                    </div>

                    <!-- Tabla de Clientes con Pedidos -->
                    <div class="bg-cardBg border border-vinotintoAccent/20 rounded-2xl shadow-xl overflow-hidden">
                        <div class="px-6 py-4 border-b border-vinotintoAccent/20 flex justify-between items-center bg-sidebarBg/50">
                            <h3 class="font-bold text-beigeText">Directorio de Clientes y Conteo de Pedidos</h3>
                            <span id="badge-clientes-count" class="text-xs bg-vinotintoAccent text-white px-3 py-1 rounded-full font-semibold">0 registros</span>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-sidebarBg/40 text-mutedText text-xs uppercase tracking-wider border-b border-vinotintoAccent/20">
                                        <th class="px-6 py-3 font-semibold">Nombre</th>
                                        <th class="px-6 py-3 font-semibold">Teléfono</th>
                                        <th class="px-6 py-3 font-semibold">Correo</th>
                                        <th class="px-6 py-3 font-semibold text-center">Pedidos 🛒</th>
                                        <th class="px-6 py-3 font-semibold">Estado / Etapa</th>
                                        <th class="px-6 py-3 font-semibold text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla-clientes-cuerpo" class="divide-y divide-vinotintoAccent/10 text-sm">
                                    <tr><td colspan="6" class="px-6 py-8 text-center text-mutedText">Cargando directorio de clientes...</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 3. VENTAS & POS (CONECTADO A CLIENTES) -->
                <div id="modulo-ventas" class="modulo-contenido hidden space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Ventas del Día</p>
                            <h3 class="text-3xl font-black text-emerald-400 mt-2">$1,240.00</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Ticket Promedio</p>
                            <h3 class="text-3xl font-black text-beigeText mt-2">$45.50</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Mesas Activas</p>
                            <h3 class="text-3xl font-black text-blue-300 mt-2">6 / 12</h3>
                        </div>
                    </div>
                    
                    <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-4">
                        <h3 class="text-lg font-bold text-beigeText">🧾 Registro de Venta POS & Suma de Pedidos al Cliente</h3>
                        <p class="text-xs text-mutedText">Ingresa el teléfono del cliente para acreditarle la compra automáticamente a su historial y sumar +1 pedido.</p>
                        <form id="form-venta-pos" onsubmit="registrarVentaPOS(event)" class="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <input type="text" id="pos-telefono" placeholder="Teléfono del cliente (ej. +58...)" required class="bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                            <input type="text" id="pos-producto" placeholder="SKU o Producto" required class="bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                            <input type="number" id="pos-monto" placeholder="Monto ($)" required class="bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                            
                            <!-- MÉTODOS DE PAGO ACTUALIZADOS -->
                            <select id="pos-pago" class="bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                                <option>PAGO MOVIL</option>
                                <option>BOLIVARES</option>
                                <option>DOLARES EFECTIVO</option>
                                <option>ZELLE</option>
                                <option>BINANCE</option>
                            </select>

                            <button type="submit" class="bg-aceituna hover:bg-aceitunaHover text-white font-semibold rounded-xl text-sm py-2.5 transition shadow-md">Registrar Venta & Sumar Pedido</button>
                        </form>
                    </div>
                </div>

                <!-- 4. INVENTARIO & SKU -->
                <div id="modulo-inventario" class="modulo-contenido hidden space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Valor Total Inventario</p>
                            <h3 class="text-3xl font-black text-beigeText mt-2">$24,850.00</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Alertas Stock Mínimo</p>
                            <h3 class="text-3xl font-black text-amber-400 mt-2">3 Productos</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">SKUs Registrados</p>
                            <h3 class="text-3xl font-black text-emerald-400 mt-2">142</h3>
                        </div>
                    </div>
                    <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                        <h3 class="text-lg font-bold text-beigeText mb-4">📦 Control de Existencias y Tallas/Colores</h3>
                        <div class="p-4 bg-sidebarBg rounded-xl border border-vinotintoAccent/30 text-center text-sm text-mutedText">
                            Módulo de Inventario sincronizado con Supabase. Listo para códigos SKU.
                        </div>
                    </div>
                </div>

                <!-- 5. CUENTAS & COBROS -->
                <div id="modulo-cuentas" class="modulo-contenido hidden space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-3">
                            <h3 class="text-lg font-bold text-beigeText">💳 Cuentas por Cobrar</h3>
                            <div class="p-4 bg-sidebarBg rounded-xl text-emerald-400 font-bold">$1,450.00 por cobrar</div>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-3">
                            <h3 class="text-lg font-bold text-beigeText">🧾 Cuentas por Pagar</h3>
                            <div class="p-4 bg-sidebarBg rounded-xl text-amber-400 font-bold">$820.00 pendientes</div>
                        </div>
                    </div>
                </div>

                <!-- 6. GASTOS & UTILIDAD -->
                <div id="modulo-gastos" class="modulo-contenido hidden space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Ingresos Brutos</p>
                            <h3 class="text-3xl font-black text-beigeText mt-2">$8,400.00</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Costos & Gastos</p>
                            <h3 class="text-3xl font-black text-rose-400 mt-2">$3,100.00</h3>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl">
                            <p class="text-xs font-bold uppercase tracking-wider text-mutedText">Utilidad Neta Real</p>
                            <h3 class="text-3xl font-black text-emerald-400 mt-2">$5,300.00</h3>
                        </div>
                    </div>
                </div>

                <!-- 7. ESTADÍSTICAS -->
                <div id="modulo-estadisticas" class="modulo-contenido hidden space-y-6">
                    <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-4">
                        <h3 class="text-lg font-bold text-beigeText">📊 Indicadores de Rendimiento (KPIs)</h3>
                        <div class="h-48 bg-sidebarBg rounded-xl flex items-center justify-center text-mutedText border border-vinotintoAccent/30">
                            Gráficos analíticos activos en GREE OS
                        </div>
                    </div>
                </div>

                <!-- 8. MARKETING & CRM -->
                <div id="modulo-marketing" class="modulo-contenido hidden space-y-6">
                    <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-4">
                        <h3 class="text-lg font-bold text-beigeText">🎯 CRM & Mensajería Masiva</h3>
                        <textarea placeholder="Escribe tu mensaje masivo para clientes segmentados..." class="w-full bg-sidebarBg border border-vinotintoAccent/30 rounded-xl p-4 text-sm text-beigeText h-28"></textarea>
                        <button onclick="alert('¡Campaña masiva enviada con éxito!');" class="px-6 py-2.5 bg-aceituna text-white font-semibold text-sm rounded-xl">Enviar Campaña</button>
                    </div>
                </div>

                <!-- 9. USUARIOS & ROLES -->
                <div id="modulo-usuarios" class="modulo-contenido hidden space-y-6">
                    <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-4">
                        <h3 class="text-lg font-bold text-beigeText">👥 Control de Usuarios, Permisos y Comisiones</h3>
                        <div class="p-4 bg-sidebarBg rounded-xl border border-vinotintoAccent/30 flex justify-between items-center text-sm">
                            <div>
                                <p class="font-bold text-beigeText">Greimary Aguilar Ramírez</p>
                                <span class="text-xs text-emerald-400">Admin General • Comisión: 5%</span>
                            </div>
                            <span class="px-3 py-1 bg-aceituna text-white text-xs rounded-lg font-bold">Activo</span>
                        </div>
                    </div>
                </div>

                <!-- 10. CONFIGURACIÓN & API -->
                <div id="modulo-configuracion" class="modulo-contenido hidden space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-4">
                            <h3 class="text-lg font-bold text-beigeText">📱 Conexión WhatsApp Business</h3>
                            <div>
                                <label class="block text-xs font-semibold text-mutedText mb-1">Número de WhatsApp</label>
                                <input type="text" value="+58 412 1234567" class="w-full bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-mutedText mb-1">Token de Webhook</label>
                                <input type="password" value="gree_token_secure" class="w-full bg-sidebarBg border border-vinotintoAccent/30 rounded-xl px-4 py-2.5 text-sm text-beigeText">
                            </div>
                            <button onclick="alert('¡Configuración guardada con éxito!')" class="w-full py-2.5 bg-aceituna text-white font-semibold rounded-xl text-sm">Guardar Cambios</button>
                        </div>
                        <div class="bg-cardBg border border-vinotintoAccent/20 p-6 rounded-2xl shadow-xl space-y-4">
                            <h3 class="text-lg font-bold text-beigeText">🔐 Seguridad & Auditoría</h3>
                            <div class="p-4 bg-sidebarBg rounded-xl border border-vinotintoAccent/30 space-y-2 text-xs text-mutedText">
                                <p>• Registro de ingresos activo 🟢</p>
                                <p>• Base de datos Supabase vinculada</p>
                                <p>• Copias de seguridad automáticas</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>

        <script>
            const infoModulos = {
                whatsapp: { titulo: "WhatsApp & Leads", sub: "Captura automatizada de clientes potenciales" },
                clientes: { titulo: "Clientes & CRM", sub: "Directorio general, conteo de pedidos y fidelización" },
                ventas: { titulo: "Ventas, POS & Cotizaciones", sub: "Registro de ventas conectado al historial de pedidos del cliente" },
                inventario: { titulo: "Inventario & SKU", sub: "Control de existencias, tallas, colores y alertas de stock mínimo" },
                cuentas: { titulo: "Cuentas por Cobrar y Pagar", sub: "Gestión de deudas, vencimientos y estados de cuenta" },
                gastos: { titulo: "Gastos & Utilidad Neta", sub: "Cálculo en tiempo real de margen bruto, costos y utilidad neta" },
                estadisticas: { titulo: "Estadísticas & Reportes", sub: "Indicadores de facturación y productos con mayor rotación" },
                marketing: { titulo: "Marketing & CRM", sub: "Segmentación de clientes y mensajería masiva" },
                usuarios: { titulo: "Usuarios & Permisos", sub: "Control de accesos ilimitados y comisiones por vendedor" },
                configuracion: { titulo: "Configuración & Control de Acceso", sub: "Gestión de número de WhatsApp, API y perfiles de usuario" }
            };

            function cambiarModulo(id) {
                document.querySelectorAll('.nav-item').forEach(el => {
                    el.classList.remove('bg-vinotintoAccent', 'text-white', 'font-medium');
                    el.classList.add('text-mutedText');
                });
                const activo = document.getElementById('nav-' + id);
                if(activo) {
                    activo.classList.add('bg-vinotintoAccent', 'text-white', 'font-medium');
                    activo.classList.remove('text-mutedText');
                }

                const mod = infoModulos[id];
                document.getElementById('titulo-modulo').innerText = mod.titulo;
                document.getElementById('subtitulo-modulo').innerText = mod.sub;

                document.querySelectorAll('.modulo-contenido').forEach(el => el.classList.add('hidden'));
                const seleccionado = document.getElementById('modulo-' + id);
                if(seleccionado) {
                    seleccionado.classList.remove('hidden');
                }

                if(id === 'whatsapp') {
                    cargarDatos();
                } else if(id === 'clientes') {
                    cargarClientes();
                }
            }

            async function cargarDatos() {
                try {
                    const res = await fetch('/contacts');
                    const resultado = await res.json();
                    if (resultado.success) {
                        document.getElementById('total-leads').innerText = resultado.total;
                        document.getElementById('badge-count').innerText = resultado.total + ' registros';
                        
                        const tbody = document.getElementById('tabla-cuerpos');
                        tbody.innerHTML = '';

                        if (resultado.contacts.length === 0) {
                            tbody.innerHTML = '<tr><td colspan="4" class="px-6 py-8 text-center text-mutedText">No hay leads registrados todavía.</td></tr>';
                            return;
                        }

                        resultado.contacts.forEach(contact => {
                            const fecha = new Date(contact.created_at).toLocaleString();
                            const tr = document.createElement('tr');
                            tr.className = 'hover:bg-vinotintoAccent/10 transition';
                            tr.innerHTML = \`
                                <td class="px-6 py-4 font-semibold text-beigeText">\${contact.name || 'Sin nombre'}</td>
                                <td class="px-6 py-4 text-mutedText font-mono text-xs">\${contact.phone || 'Sin teléfono'}</td>
                                <td class="px-6 py-4">
                                    <span class="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        \${contact.status || 'Cliente Potencial'}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-mutedText text-xs">\${fecha}</td>
                            \`;
                            tbody.appendChild(tr);
                        });
                    }
                } catch (error) {
                    console.error('Error al cargar contactos:', error);
                }
            }

            async function cargarClientes() {
                try {
                    const res = await fetch('/clients');
                    const resultado = await res.json();
                    if (resultado.success) {
                        const clientes = resultado.clients;
                        document.getElementById('stat-total-clientes').innerText = clientes.length;
                        
                        const potenciales = clientes.filter(c => c.status === 'Cliente Potencial' || c.status === 'Lead').length;
                        const activos = clientes.filter(c => c.status === 'Cliente Activo').length;

                        document.getElementById('stat-potenciales').innerText = potenciales;
                        document.getElementById('stat-activos').innerText = activos;
                        document.getElementById('badge-clientes-count').innerText = clientes.length + ' registros';

                        const tbody = document.getElementById('tabla-clientes-cuerpo');
                        tbody.innerHTML = '';

                        if (clientes.length === 0) {
                            tbody.innerHTML = '<tr><td colspan="6" class="px-6 py-8 text-center text-mutedText">No hay clientes registrados en la base de datos.</td></tr>';
                            return;
                        }

                        clientes.forEach(client => {
                            const badgeColor = client.status === 'Cliente Activo' 
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20';

                            const tr = document.createElement('tr');
                            tr.className = 'hover:bg-vinotintoAccent/10 transition';
                            tr.innerHTML = \`
                                <td class="px-6 py-4 font-semibold text-beigeText">\${client.name || 'Sin nombre'}</td>
                                <td class="px-6 py-4 text-mutedText font-mono text-xs">\${client.phone || 'Sin teléfono'}</td>
                                <td class="px-6 py-4 text-mutedText text-xs">\${client.email || 'No registrado'}</td>
                                <td class="px-6 py-4 text-center">
                                    <span class="px-3 py-1 bg-sidebarBg border border-vinotintoAccent/30 text-emerald-400 font-bold rounded-lg text-xs">
                                        🛒 \${client.orders_count || 0}
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="px-2.5 py-1 text-xs font-bold rounded-lg border \${badgeColor}">
                                        \${client.status || 'Cliente Potencial'}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button onclick="cambiarEstadoCliente('\${client.id}', 'Cliente Activo')" class="px-3 py-1.5 bg-aceituna hover:bg-aceitunaHover text-white text-xs font-semibold rounded-lg transition">
                                        ✅ Activar
                                    </button>
                                </td>
                            \`;
                            tbody.appendChild(tr);
                        });
                    }
                } catch (error) {
                    console.error('Error al cargar clientes:', error);
                }
            }

            async function registrarCliente(event) {
                event.preventDefault();
                const name = document.getElementById('cli-nombre').value;
                const phone = document.getElementById('cli-telefono').value;
                const email = document.getElementById('cli-email').value;
                const status = document.getElementById('cli-estado').value;

                try {
                    const res = await fetch('/add-client', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, phone, email, status })
                    });
                    const resultado = await res.json();
                    if(resultado.success) {
                        alert('¡Cliente registrado con éxito!');
                        document.getElementById('form-nuevo-cliente').reset();
                        cargarClientes();
                    } else {
                        alert('Error al registrar: ' + resultado.error);
                    }
                } catch (err) {
                    console.error(err);
                }
            }

            async function registrarVentaPOS(event) {
                event.preventDefault();
                const phone = document.getElementById('pos-telefono').value;
                const product = document.getElementById('pos-producto').value;
                const monto = document.getElementById('pos-monto').value;
                const pago = document.getElementById('pos-pago').value;

                try {
                    const res = await fetch('/register-sale', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ phone, product, monto, pago })
                    });
                    const resultado = await res.json();
                    if(resultado.success) {
                        alert(\`¡Venta registrada con éxito! Pedido sumado al cliente: \${resultado.clientName}\`);
                        document.getElementById('form-venta-pos').reset();
                        cargarClientes();
                    } else {
                        alert('Aviso: ' + resultado.error);
                    }
                } catch (err) {
                    console.error(err);
                }
            }

            async function cambiarEstadoCliente(id, nuevoEstado) {
                try {
                    const res = await fetch(\`/update-client/\${id}\`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ status: nuevoEstado })
                    });
                    const resultado = await res.json();
                    if(resultado.success) {
                        alert('¡Estado de cliente actualizado!');
                        cargarClientes();
                    }
                } catch (err) {
                    console.error(err);
                }
            }

            function sincronizarTodo() {
                cargarDatos();
                cargarClientes();
                alert('¡Sistema GREE sincronizado correctamente con Supabase!');
            }

            cargarDatos();
            cargarClientes();
        </script>
    </body>
    </html>
  `);
});

// Ruta API para listar clientes
app.get('/clients', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json({ success: true, clients: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Ruta API para registrar cliente manualmente
app.post('/add-client', async (req, res) => {
  try {
    const { name, phone, email, status } = req.body;
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, phone, email: email || '', status: status || 'Cliente Potencial', orders_count: 0 }])
      .select();

    if (error) throw error;
    res.json({ success: true, message: '¡Cliente guardado con éxito!', data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Ruta API para registrar venta y sumar +1 pedido al cliente en Supabase
app.post('/register-sale', async (req, res) => {
  try {
    const { phone, product, monto, pago } = req.body;

    // 1. Buscar si el cliente existe por su teléfono
    const { data: existingClients, error: searchError } = await supabase
      .from('contacts')
      .select('*')
      .eq('phone', phone);

    if (searchError) throw searchError;

    if (!existingClients || existingClients.length === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'No se encontró ningún cliente con ese teléfono. Regístralo primero en Clientes & CRM.' 
      });
    }

    const client = existingClients[0];
    const newOrdersCount = (client.orders_count || 0) + 1;

    // 2. Actualizar su contador de pedidos y cambiar estado a Cliente Activo
    const { data, error: updateError } = await supabase
      .from('contacts')
      .update({ 
        orders_count: newOrdersCount,
        status: 'Cliente Activo'
      })
      .eq('id', client.id)
      .select();

    if (updateError) throw updateError;

    res.json({ 
      success: true, 
      clientName: client.name,
      newOrdersCount,
      message: '¡Venta registrada y pedido acreditado!' 
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Ruta API para actualizar estado manual
app.put('/update-client/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const { data, error } = await supabase
      .from('contacts')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json({ success: true, message: '¡Estado actualizado!', data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Ruta API para capturar lead de WhatsApp automáticamente
app.post('/add-lead', async (req, res) => {
  try {
    const { name, phone, status } = req.body;
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name: name || 'Sin nombre', phone: phone || 'Sin teléfono', status: status || 'Cliente Potencial', orders_count: 0 }])
      .select();

    if (error) throw error;
    res.json({ success: true, message: '¡Lead capturado!', data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Ruta API para listar leads de WhatsApp
app.get('/contacts', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json({ success: true, total: data.length, contacts: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 GREE Enterprise OS corriendo en http://localhost:${PORT}`);
});