"use client"
import {motion} from 'framer-motion';
import React from 'react';
import '../privacs.css'
import TitleSmallCard from "@/components/card/titleSmallCard";
const Page = () => {
    return (
        <div className="min-h-screen w-screen flex font-montserrat text-gray-700 mt-12">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className={'mx-auto max-w-7xl mt-12 h-full'}>
                <div className={"flex flex-col"}>
                    <div className={"mt-4 mb-2"}>
                        <TitleSmallCard title={"Çerez Politikası"}/>
                    </div>
                    <p>Bu metnin amacı, ziyaret etmekte olduğunuz İnternet sitesi tarafından kullanılan çerezlerin cihazınıza yerleştirilmesi aracılığıyla otomatik yolla elde edilen kişisel verilerin işlenmesine ilişkin olarak, hangi amaçlarla hangi tür çerezleri kullandığımız ve bu çerezleri nasıl yönetebileceğiniz konularında sizlere bilgi vermektir. Platform içerisinde, hizmetlerin yerine getirilebilmesi için kullandığımız zorunlu çerezler ile bunlar haricinde kullanıcıların açık rızalarına bağlı Analitik çerezler türlerinde çerezler yer almaktadır.</p>
                    <div className={"mt-4 mb-2"}>
                        <TitleSmallCard title={"Çerez Nedir?"}/>
                    </div>
                    <p>Çerezler, bir İnternet sayfası ziyaret edildiğinde kullanıcılara ilişkin birtakım bilgilerin kullanıcıların terminal cihazlarında depolanmasına izin veren düşük boyutlu zengin metin biçimli text formatlarıdır. Çerezler, bir İnternet sitesini ilk ziyaretiniz sırasında tarayıcınız aracılığıyla cihazınıza depolanabilir ve aynı siteyi aynı cihazla tekrar ziyaret ettiğinizde, tarayıcınız cihazınızda site adına kayıtlı bir çerez olup olmadığını kontrol eder. Eğer kayıt var ise, kaydın içindeki veriyi ziyaret etmekte olduğunuz İnternet sitesine iletir. Bu sayede İnternet sitesi, sizin daha önceki ziyaretinizi tespit eder ve size iletilecek içeriği ona göre belirler.</p>
                    <div className={"mt-4 mb-2"}>
                        <TitleSmallCard title={"Çerezler Neden Kullanılır?"}/>
                    </div>
                    <p>Çerezler, İnternet sitesinin daha verimli çalışması ve kullanıcılarının kişisel ihtiyaçlarına daha uygun hizmet sunulması amaçlarıyla kullanılmaktadır. Kullanmakta olduğumuz çerezler, bilgilerin toplanması, İnternet sitemizin işlevselliğini ve performansını artırılması, kullanıcı deneyiminin iyileştirilmesi ve yasal yükümlülüklerin yerine getirilmesi gibi işlevleri yerine getirmektedir. Bunların yanı sıra, kullanmakta olduğumuz çerezler sayesinde:</p>
                    <ol>
                        <li>Oturum bilgileriniz korunur ve güvenliğiniz sağlanır.</li>
                        <li>Site içi deneyiminiz iyileştirilir ve hızlandırılır.</li>
                        <li>Tercihleriniz hatırlanarak size özel içerikler sunulur.</li>
                        <li>Site kullanımına ilişkin analiz yapılarak hizmet kalitesi artırılır.</li>
                    </ol>
                    <div className={"mt-4 mb-2"}>
                        <TitleSmallCard title={"Kullanılan Çerez Türleri ve Kullanım Amaçları"}/>
                    </div>
                    <h3>Analitik çerezler</h3>
                    <p>Analitik çerezler, kullanıcıların davranışlarının analiz edilebilmesi amacıyla istatistiki ölçümler yapılmasına olanak tanıyan çerezlerdir. Bu çerezler, İnternet sitesinin performansının ve sunulan hizmetin kalitesinin artırılması amaçlarıyla kullanılmaktadır.</p>
                    <h3>Zorunlu Çerezler</h3>
                    <p>Zorunlu çerezler, bir İnternet sitesinin çalışması için gerekli olan çerezlerdir. Bu çerezler, kullanıcının talep etmiş olduğu bir bilgi toplama hizmetinin (log-in olma, form doldurma, gizlilik tercihlerinin hatırlanması gibi) yerine getirilebilmesi için zorunlu olarak kullanılmaktadırlar. Pazarlama amacı taşımayan zorunlu çerezlerin engellenmesi halinde, İnternet sitesinin bazı bölümleri çalışmayacağından, İnternet sitesi kendisinden beklenen fonksiyonu yerine getiremeyecektir.</p>
                    <div className={"mt-4 mb-2"}>
                        <TitleSmallCard title={"Çerez Yönetimi"}/>
                    </div>
                    <p>Tarayıcı ayarlarınızdan çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz. Çerezleri tamamen devre dışı bırakabilir veya belirli türdeki çerezlere izin verebilirsiniz. Çoğu tarayıcı, varsayılan olarak çerezleri kabul edecek şekilde ayarlanmıştır, ancak tarayıcınızın ayarlarını değiştirerek çerezleri reddedebilir veya çerez gönderildiğinde uyarı verecek şekilde ayarlayabilirsiniz. Daha fazla bilgi için ts.junior.dev@gmail.com adresinden bize ulaşabilirsiniz.</p>
                    <div className={"mt-4 mb-2"}>
                        <TitleSmallCard title={"Tarayıcı Ayarları"}/>
                    </div>
                    <p>Kullanıcılar çerez yönetim paneli üzerinden, İnternet sitemizde kullanılan çerez çeşitlerini görebilmekte ve Zorunlu Çerezler dışında kalan tüm çerezler için tercihlerini belirleyebilmektedirler. Popüler tarayıcıların çerez ayarlarını değiştirmek için aşağıdaki bağlantıları kullanabilirsiniz:</p>
                    <ol>
                        <li>Google Chrome: chrome://settings/cookies</li>
                        <li>Mozilla Firefox: about:preferences#privacy</li>
                        <li>Safari: Tercihler {'>'} Gizlilik</li>
                        <li>Microsoft Edge: edge://settings/privacy</li>
                        <li>Opera: opera://settings/privacy</li>
                    </ol>
                    <div className={"mt-4 mb-2"}>
                        <TitleSmallCard title={"Güncellemeler"}/>
                    </div>
                    <p>Bu Çerez Politikası, gerektiğinde güncellenir. Değişiklikler yayınlandığı anda yürürlüğe girer.</p>
                    <p>Son güncelleme tarihi: <strong>1 Şubat 2026</strong></p>
                </div>

            </motion.div>
        </div>
    );
};

export default Page;