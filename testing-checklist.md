# Checklist การทดสอบเว็บไซต์

## 1. การทดสอบมาตรฐาน HTML5 ✅

- [ ] ไฟล์มี `<!DOCTYPE html>` declaration
- [ ] ใช้ semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] มี `lang="th"` attribute
- [ ] ใช้ proper form attributes (`novalidate`, `autocomplete`)
- [ ] มี `role` attributes สำหรับ accessibility

## 2. การทดสอบฟีเจอร์ส่งข้อมูล ✅

- [ ] ฟอร์มสามารถส่งข้อมูลได้
- [ ] แสดง loading state ระหว่างส่งข้อมูล
- [ ] แสดงข้อความแจ้งเตือนเมื่อส่งสำเร็จ
- [ ] แสดงข้อความแจ้งเตือนเมื่อเกิดข้อผิดพลาด
- [ ] ฟอร์ม reset หลังส่งสำเร็จ

## 3. การทดสอบ Accessibility ✅

- [ ] ใช้ screen reader (NVDA, JAWS, VoiceOver) ทดสอบการอ่าน
- [ ] ทดสอบ keyboard navigation (Tab, Shift+Tab, Enter, Escape)
- [ ] ตรวจสอบ ARIA attributes
- [ ] ทดสอบ skip link
- [ ] ตรวจสอบ focus indicators
- [ ] ทดสอบ `prefers-reduced-motion`
- [ ] ทดสอบ `prefers-contrast`

## 4. การทดสอบ SEO ✅

- [ ] ตรวจสอบ meta tags (description, keywords, author)
- [ ] ตรวจสอบ Open Graph tags
- [ ] ตรวจสอบ Twitter Card tags
- [ ] ตรวจสอบ structured data (JSON-LD)
- [ ] ตรวจสอบ heading hierarchy (h1, h2, h3)
- [ ] ตรวจสอบ semantic HTML structure

## 5. การทดสอบ Responsive Design ✅

- [ ] ทดสอบบนหน้าจอขนาดใหญ่ (1920px+)
- [ ] ทดสอบบนหน้าจอขนาดกลาง (1024px)
- [ ] ทดสอบบนหน้าจอขนาดเล็ก (768px)
- [ ] ทดสอบบนมือถือ (480px)
- [ ] ตรวจสอบ mobile navigation menu
- [ ] ตรวจสอบ responsive typography
- [ ] ตรวจสอบ responsive images

## 6. การทดสอบ Layout และ Design ✅

- [ ] ตรวจสอบ visual hierarchy
- [ ] ตรวจสอบ spacing และ typography
- [ ] ตรวจสอบ color contrast
- [ ] ตรวจสอบ card-based design
- [ ] ตรวจสอบ gradient backgrounds
- [ ] ตรวจสอบ hover effects

## 7. การทดสอบ Form Validation ✅

- [ ] ทดสอบ required field validation
- [ ] ทดสอบ email format validation
- [ ] ทดสอบ phone number format validation
- [ ] ทดสอบ character length validation
- [ ] ทดสอบ real-time validation
- [ ] ตรวจสอบ error messages
- [ ] ทดสอบ accessibility-friendly error messages

## 8. การทดสอบ JavaScript Functionality ✅

- [ ] ทดสอบ form validation system
- [ ] ทดสอบ loading states
- [ ] ทดสอบ alert system
- [ ] ทดสอบ smooth scrolling
- [ ] ทดสอบ mobile menu toggle
- [ ] ทดสอบ keyboard navigation
- [ ] ทดสอบ focus management
- [ ] ทดสอบ error handling

## 9. การทดสอบลิงก์และการนำทาง ✅

- [ ] ทดสอบ internal links
- [ ] ทดสอบ external links (มี `target="_blank"` และ `rel="noopener noreferrer"`)
- [ ] ทดสอบ smooth scrolling
- [ ] ทดสอบ active state management
- [ ] ตรวจสอบ breadcrumb navigation
- [ ] ตรวจสอบ external link indicators

## 10. การทดสอบความปลอดภัย ✅

- [ ] ตรวจสอบ Content Security Policy headers
- [ ] ตรวจสอบ X-Content-Type-Options
- [ ] ตรวจสอบ X-Frame-Options
- [ ] ตรวจสอบ X-XSS-Protection
- [ ] ตรวจสอบ Referrer-Policy
- [ ] ทดสอบ input sanitization
- [ ] ตรวจสอบ CSRF protection

## 11. การทดสอบ Performance ✅

- [ ] ตรวจสอบ PageSpeed Insights
- [ ] ตรวจสอบ Core Web Vitals
- [ ] ทดสอบ lazy loading
- [ ] ตรวจสอบ Service Worker registration
- [ ] ตรวจสอบ efficient CSS selectors
- [ ] ตรวจสอบ minimal JavaScript footprint

## 12. การทดสอบ User Experience ✅

- [ ] ทดสอบ loading indicators
- [ ] ทดสอบ success/error feedback
- [ ] ทดสอบ form auto-reset
- [ ] ทดสอบ keyboard shortcuts
- [ ] ทดสอบ focus indicators
- [ ] ทดสอบ character counter

## 13. การทดสอบ Browser Compatibility ✅

- [ ] ทดสอบบน Chrome (ล่าสุด)
- [ ] ทดสอบบน Firefox (ล่าสุด)
- [ ] ทดสอบบน Safari (ล่าสุด)
- [ ] ทดสอบบน Edge (ล่าสุด)
- [ ] ทดสอบบน mobile browsers
- [ ] ตรวจสอบ progressive enhancement
- [ ] ตรวจสอบ fallbacks

## 14. การทดสอบ Cross-Device ✅

- [ ] ทดสอบบน Windows PC
- [ ] ทดสอบบน Mac
- [ ] ทดสอบบน iPhone
- [ ] ทดสอบบน Android
- [ ] ทดสอบบน tablet
- [ ] ตรวจสอบ touch interactions

## 15. การทดสอบ Print Styles ✅

- [ ] ทดสอบ print preview
- [ ] ตรวจสอบ print styles
- [ ] ตรวจสอบ content visibility
- [ ] ตรวจสอบ page breaks

## คำแนะนำการทดสอบ

### สำหรับการทดสอบ Accessibility:
1. ใช้ screen reader จริง
2. ทดสอบด้วย keyboard เท่านั้น
3. ตรวจสอบ color contrast ratio
4. ทดสอบกับ users ที่มีความบกพร่อง

### สำหรับการทดสอบ Performance:
1. ใช้ Chrome DevTools
2. ใช้ Lighthouse
3. ใช้ WebPageTest
4. ทดสอบบน slow connections

### สำหรับการทดสอบ Security:
1. ใช้ OWASP ZAP
2. ตรวจสอบ security headers
3. ทดสอบ input validation
4. ตรวจสอบ HTTPS

### สำหรับการทดสอบ SEO:
1. ใช้ Google Search Console
2. ใช้ Google PageSpeed Insights
3. ตรวจสอบ structured data
4. ทดสอบ social media sharing

## เครื่องมือที่แนะนำ

### Accessibility Testing:
- WAVE Web Accessibility Evaluator
- axe DevTools
- Lighthouse Accessibility Audit
- Screen readers (NVDA, JAWS, VoiceOver)

### Performance Testing:
- Google PageSpeed Insights
- WebPageTest
- Chrome DevTools Performance tab
- Lighthouse Performance Audit

### SEO Testing:
- Google Search Console
- Google PageSpeed Insights
- Schema.org Validator
- Social Media Debuggers

### Security Testing:
- OWASP ZAP
- Security Headers
- Content Security Policy Evaluator
- SSL Labs

### Browser Testing:
- BrowserStack
- Sauce Labs
- CrossBrowserTesting
- Browser DevTools

## การรายงานผลการทดสอบ

สำหรับแต่ละการทดสอบ ให้บันทึก:
1. ผลการทดสอบ (ผ่าน/ไม่ผ่าน)
2. ข้อสังเกตหรือปัญหา
3. ข้อเสนอแนะในการปรับปรุง
4. ความสำคัญของปัญหา (สูง/กลาง/ต่ำ)
5. วันที่ทดสอบ
6. ผู้ทดสอบ 