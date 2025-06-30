# 🚀 Integración del Formulario de Contacto

Este documento te guía paso a paso para integrar el formulario de contacto con **Getform** o **FormSpree**.

## 📋 Opciones Disponibles

### 1. **Getform** (Recomendado)
- ✅ Plan gratuito: 50 envíos/mes
- ✅ Fácil configuración
- ✅ API REST simple
- ✅ Dashboard para ver envíos

### 2. **FormSpree**
- ✅ Plan gratuito: 50 envíos/mes
- ✅ Muy popular y confiable
- ✅ Integración directa con formularios HTML

---

## 🔧 Configuración con Getform

### Paso 1: Crear cuenta en Getform
1. Ve a [getform.io](https://getform.io)
2. Regístrate con tu email
3. Confirma tu cuenta

### Paso 2: Crear un endpoint
1. En el dashboard, haz clic en "Create Form"
2. Dale un nombre como "Departamento Brasil 702"
3. Copia el endpoint que te genera (ejemplo: `https://getform.io/f/xqkqkqkq`)

### Paso 3: Configurar el formulario
1. Abre `src/components/ContactForm.jsx`
2. Busca esta línea:
   ```javascript
   const GETFORM_ENDPOINT = 'https://getform.io/f/TU_ENDPOINT_AQUI'
   ```
3. Reemplaza `TU_ENDPOINT_AQUI` con tu endpoint real:
   ```javascript
   const GETFORM_ENDPOINT = 'https://getform.io/f/xqkqkqkq'
   ```

### Paso 4: Probar el formulario
1. Ejecuta `npm run dev`
2. Llena el formulario y envíalo
3. Ve a tu dashboard de Getform para ver el envío

---

## 🔧 Configuración con FormSpree

### Paso 1: Crear cuenta en FormSpree
1. Ve a [formspree.io](https://formspree.io)
2. Regístrate con tu email
3. Confirma tu cuenta

### Paso 2: Crear un formulario
1. En el dashboard, haz clic en "New Form"
2. Dale un nombre como "Departamento Brasil 702"
3. Copia el Form ID que te genera (ejemplo: `xqkqkqkq`)

### Paso 3: Usar el componente FormSpree
1. Renombra `ContactForm-FormSpree.jsx` a `ContactForm.jsx` (haciendo backup del original)
2. O actualiza `src/App.jsx` para importar el componente FormSpree:
   ```javascript
   import ContactForm from './components/ContactForm-FormSpree'
   ```

### Paso 4: Configurar el endpoint
1. En el archivo `ContactForm-FormSpree.jsx`, busca:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TU_FORM_ID_AQUI'
   ```
2. Reemplaza `TU_FORM_ID_AQUI` con tu Form ID real:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqkqkqkq'
   ```

---

## 📧 Configuración de Notificaciones por Email

### Getform
1. Ve a tu dashboard
2. En "Settings" → "Email Notifications"
3. Agrega tu email para recibir notificaciones
4. Personaliza el asunto y contenido del email

### FormSpree
1. Ve a tu dashboard
2. En "Settings" → "Email"
3. Configura el email de destino
4. Personaliza el asunto y contenido

---

## 🎯 Personalización del Formulario

### Agregar campos adicionales
Si quieres agregar más campos (como "Interés en financiamiento"), modifica:

1. **Estado del formulario:**
   ```javascript
   const [formData, setFormData] = useState({
     name: '',
     phone: '',
     email: '',
     message: '',
     financing: '' // Nuevo campo
   })
   ```

2. **Validación:**
   ```javascript
   if (!formData.financing) {
     newErrors.financing = 'Selecciona una opción'
   }
   ```

3. **Envío de datos:**
   ```javascript
   body: JSON.stringify({
     name: formData.name,
     phone: formData.phone,
     email: formData.email,
     message: formData.message,
     financing: formData.financing, // Nuevo campo
     subject: 'Nuevo interés en Departamento Brasil 702',
     source: 'Landing Page - Departamento Brasil 702'
   })
   ```

### Personalizar mensajes
Modifica los textos en el componente:
- Mensaje de éxito
- Mensajes de error
- Placeholders de los campos

---

## 🔒 Seguridad y Spam

### Getform
- ✅ Protección automática contra spam
- ✅ Validación de reCAPTCHA (opcional)
- ✅ Rate limiting

### FormSpree
- ✅ Protección automática contra spam
- ✅ Honeypot fields automáticos
- ✅ Rate limiting

---

## 📊 Análisis y Seguimiento

### Getform
- Dashboard con estadísticas
- Exportación de datos
- Integración con Zapier

### FormSpree
- Dashboard con estadísticas
- Exportación de datos
- Integración con servicios externos

---

## 🚨 Solución de Problemas

### Error 404
- Verifica que el endpoint esté correcto
- Asegúrate de que el formulario esté activo

### Error 429 (Rate Limit)
- Has excedido el límite de envíos
- Considera actualizar a un plan de pago

### Formulario no envía
- Verifica la consola del navegador
- Asegúrate de que todos los campos requeridos estén llenos
- Verifica la conexión a internet

---

## 💡 Consejos Adicionales

1. **Prueba siempre en desarrollo** antes de desplegar
2. **Configura notificaciones por email** para no perder leads
3. **Personaliza los mensajes** para tu negocio
4. **Considera agregar reCAPTCHA** si recibes mucho spam
5. **Monitorea los envíos** regularmente

---

## 📞 Soporte

- **Getform**: [support@getform.io](mailto:support@getform.io)
- **FormSpree**: [support@formspree.io](mailto:support@formspree.io)

---

**¡Tu formulario estará funcionando en minutos! 🎉** 