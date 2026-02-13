"use client"
import {motion} from 'framer-motion';
import React from 'react';
import '../privacs.css'
import TitleSmallCard from "@/components/card/titleSmallCard";

const Page = () => {
    return (
        <div className="min-h-screen w-screen flex font-montserrat text-gray-700 mt-12">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className={'mx-auto max-w-7xl mt-12 h-full'}>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"Gizlilik Politikası"}/>
                </div>
                <p>Bu İnternet sitesini kullanarak kişisel verilerinizin işlenmesini kabul etmiş olursunuz. Güvenliğiniz bizim için önemli. Bu sebeple, bizimle paylaşacağınız kişisel verileriniz hassasiyetle korunmaktadır.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"Veri Sorumlusu"}/>
                </div>
                <p>Veri sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması politikası ile ziyaret etmekte olduğunuz İnternet sitesi kapsamında hangi kişisel verilerinizin hangi amaçlarla işleneceği, işlenen verilerin kimlerle ve hangi sebeplerle paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebepleri ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda siz kullanıcılarımızı aydınlatmayı amaçlıyorum.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"Toplanan Kişisel Veriler"}/>
                </div>
                <p>Bu İnternet sitesi tarafından toplanan kişisel verileriniz: </p>
                <ul>
                    <li>Kullanım verileri</li>
                    <li>Konum bilgileri</li>
                </ul>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"Kullanılan Servisler"}/>
                </div>
                <h3>Analitik ve izleme</h3>
                <ul>
                    <li><strong>Google Analytics</strong>: Google Analytics, ziyaretçi davranışlarını ve site kullanımını analiz etmek için kullanılmaktadır. Bu hizmet, ziyaretçi trafiği, etkileşimler ve kullanıcı davranışları hakkında detaylı raporlar sağlar.</li>
                </ul>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"Verilerin İşlenme Amaçları"}/>
                </div>
                <p>Kişisel verileriniz, bu İnternet sitesi tarafından amacına uygun hizmet sunulabilmesi, yasal yükümlülüklerin yerine getirilmesi, hizmet kalitesinin artırılması, iletişim, güvenlik ve gerektiğinde yasal merciler ile bilgi paylaşılabilmesi amaçları ile işlenmektedir. Kişisel verileriniz, bu sayılan amaçlar dışında kullanılmayacaktır.</p>
                <h2>Verilerin Aktarılması</h2>
                <p>Bu İnternet sitesi tarafından toplanan kişisel verileriniz, yasal zorunluluklar haricinde, açık rızanız olmadan üçüncü kişiler ile paylaşılmaz. Ancak hizmet sağlayıcılarımız, iş ortaklarımız ve yasal merciler ile, hizmetin sağlanması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla gerekli olduğu ölçüde paylaşılabilir.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"Çerez Kullanımı"}/>
                </div>
                <p>Bu İnternet sitesi çerez kullanmaktadır. Çerezler, bir İnternet sayfası ziyaret edildiğinde kullanıcılara ilişkin birtakım bilgilerin kullanıcıların terminal cihazlarında depolanmasına izin veren düşük boyutlu zengin metin biçimli text formatlarıdır. Çerezler, bir İnternet sitesini ilk ziyaretiniz sırasında tarayıcınız aracılığıyla cihazınıza depolanabilir ve aynı siteyi aynı cihazla tekrar ziyaret ettiğinizde, tarayıcınız cihazınızda site adına kayıtlı bir çerez olup olmadığını kontrol eder. Eğer kayıt var ise, kaydın içindeki veriyi ziyaret etmekte olduğunuz İnternet sitesine iletir. Bu sayede İnternet sitesi, sizin daha önceki ziyaretinizi tespit eder ve size iletilecek içeriği ona göre belirler.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"Yasal Haklarınız"}/>
                </div>
                <h3>KVKK Kapsamında Haklarınız</h3>
                <p>6698 sayılı KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili aşağıda yer alan taleplerde bulunma hakkına sahiptir:</p>
                <ol type="a">
                    <li>Kişisel verilerinin işlenip işlenmediğini öğrenme.</li>
                    <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme.</li>
                    <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme.</li>
                    <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme.</li>
                    <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme.</li>
                    <li>KVKK madde 7 ile öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
                    <li>Düzeltme, silme ve yok edilme talepleri neticesinde yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme.</li>
                    <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.</li>
                </ol>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"İletişim"}/>
                </div>
                <p>Kişisel verilerinizle ilgili haklarınızı kullanmak veya Gizlilik Politika&apos;mız hakkında daha fazla bilgi almak için ts.junior.dev@gmail.com adresinden bizimle iletişime geçebilirsiniz.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleSmallCard title={"Onay ve Yükümlülük"}/>
                </div>
                <p>İnternet sitemiz ile kişisel verilerinizi paylaşmak, tamamen sizin tercihinizdir. İnternet sitemizi kullanmaya devam ettiğiniz takdirde, bu Gizlilik Politikası&apos;nı kabul ettiğiniz varsayılacaktır. Bu politika, <strong>1 Şubat 2026</strong> tarihinde yürürlüğe girmiş olup, gerektiğinde güncellenir.</p>
            </motion.div>
        </div>
    );
};

export default Page;