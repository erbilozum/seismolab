"use client"
import {motion} from 'framer-motion';
import React from 'react';
import '../privacs.css'
import TitleCardSmall from "@/components/cards/titleCardSmall";
const Page = () => {
    return (
        <div className="min-h-screen w-screen flex font-montserrat text-gray-700 mt-12">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className={'mx-auto max-w-7xl mt-12 h-full'}>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Kullanım Koşulları"}/>
                </div>
                <p>Bu Kullanım Koşulları, bu internet sitesini kullanırken uymanız gereken kuralları içermektedir. Lütfen İnternet sitesini kullanmaya devam etmeden önce bu koşulları dikkatli bir şekilde okuyunuz.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Kapsam ve Değişiklikler"}/>
                </div>
                <p> Bu Kullanım Koşulları, internet sitesi kullanımı sırasında uygulanacak kuralları ve tarafların hak ve yükümlülüklerini belirlemektedir. İnternet sitesini kullanmaya devam ettiğiniz takdirde bu koşulları kabul ettiğini varsayılacaktır.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Hizmet İçeriği ve Kullanım"}/>
                </div>
                <p>Bu İnternet sitesi tarafından sunulan hizmetler, yasal mevzuatlara uygun bir şekilde kullanılmak üzere tasarlanmıştır. Kullanıcılar, İnternet sitesini kullanırken tüm yasa, tüzük ve yönetmelikler ile uluslararası sözleşmelere ve teamüllere uymakla yükümlüdür. Yazılımcı, herhangi bir zamanda, herhangi bir nedenle, önceden bildirimde bulunmaksızın hizmetlerini değiştirme, askıya alma veya sonlandırma hakkını saklı tutar.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Kullanıcı Yükümlülükleri"}/>
                </div>
                <p>Bu İnternet sitesinin kullanıcıları aşağıda yer alan kurallara uymakla yükümlüdür:</p>
                <ol>
                    <li>Yasalara aykırı ve suç teşkil eder nitelikte paylaşımlarda bulunmamak.</li>
                    <li>Üçüncü kişilerin fikri mülkiyet haklarını ihlal eder nitelikte eylemlerde bulunmamak.</li>
                    <li>Kötü amaçlı yazılımları yaymamak veya güvenlik açıklarını istismar etmemek.</li>
                    <li>Sunulan hizmetleri amacına aykırı bir şekilde veya kötüye kullanmamak.</li>
                    <li>Diğer kullanıcıların sunulan hizmetlerden yararlanmalarını engelleyecek nitelikte davranışlarda bulunmamak.</li>
                </ol>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Gizlilik Politikası"}/>
                </div>
                <p>Bu İnternet sitesini kullanmaya devam etmekle Gizlilik Politika&apos;mızı kabul etmiş olursunuz. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi için lütfen Gizlilik Politika&apos;mızı inceleyin.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Fikri Mülkiyet Hakları"}/>
                </div>
                <p>İnternet sitesinde yer alan tüm içerik, tasarım, logo, yazılım ve sair materyaller, yazılımcı fikri mülkiyet ve telif haklarına haiz olup, fikir ve sanat eserleri kanunu ve sair yasal mevzuatlarca korunmaktadır. Bu içeriklerin izinsiz kullanımı, kopyalanması, çoğaltılması, değiştirilmesi veya dağıtılması yasaktır.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Genel Hükümler"}/>
                </div>
                <ol>
                    <li>Kullanıcıların tamamı, İnternet sitesini kullanmaya devam etmekle işbu platformu, hukuka ve ahlaka uygun bir şekilde ve yalnızca kişisel amaçlar ile sınırlı olmak üzere kullanacaklarını ve üçüncü kişinin haklarını ihlal eder nitelikte eylemlerde bulunmayacaklarını kabul ve taahhüt ederler.</li>
                    <li>Kullanıcıların, İnternet sitesi dahilinde yaptıkları işlem ve eylemlerindeki, hukuki ve cezai sorumlulukları kendilerine aittir.</li>
                    <li>İnternet sitesinde yer alan bilgilerin doğruluk ve güncelliğini sağlamak için elimizden geleni yapmaktayız. Ancak gösterdiğimiz tüm bu çabaya rağmen bu bilgiler, fiili değişikliklerin gerisinde kalabilir, birtakım farklılıklar olabilir.</li>
                    <li>İnternet sitesinde üçüncü şahıslar tarafından işletilen ve içerikleri tarafımızca bilinmeyen diğer İnter sitelerine, uygulamalara ve platformlara köprüler (hyperlink) bulunabilir. Yazılımcı, yalnızca bu sitelere ulaşımı sağlamakta olup, içerikleri ile ilgili hiçbir sorumluluk kabul etmemektedir.</li>
                    <li>İnternet sitesini virüslerden arındırılmış olarak tutmak konusunda elimizden geleni yapsak da, virüslerin tamamen bulunmadığı garantisini vermemekteyiz. Bu nedenle veri indirirken, virüslere karşı gerekli önlemi almak, kullanıcıların sorumluluğundadır.</li>
                </ol>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Sorumluluk Sınırları"}/>
                </div>
                <p>İnternet sitesinin kullanımından doğabilecek doğrudan, dolaylı, özel veya cezai hiçbir zarardan sorumlu tutulamaz. İnternet sitemiz, &quot;olduğu gibi&quot; sunulmaktadır ve kesintisiz veya hatasız çalışacağına dair herhangi bir garanti verilmemektedir.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Uyuşmazlık Çözümü"}/>
                </div>
                <p>Bu İnternet sitesinin kullanımından doğabilecek uyuşmazlıklarda, yazılımcı hiç bir sorumluluk kabul etmemekte olup tüm sorumluluk kullanıcıya ait olacaktır. Bu koşullar, Türkiye kanunlarına göre yorumlanacak ve uygulanacaktır.</p>
                <div className={"mt-4 mb-2"}>
                    <TitleCardSmall title={"Son Hükümler"}/>
                </div>
                <p>Bu Kullanım Koşulları, <strong>1 Şubat 2026</strong> tarihinde yürürlüğe girmiş olup, İnternet sitesini kullanmaya devam ettiğiniz takdirde işbu Kullanım Koşulları&apos;nı kabul ettiğiniz varsayılacaktır. Kullanım Koşulları içerisinde yer alan herhangi bir hükmün geçersiz sayılması, diğer hükümlerin geçerliliğini etkilemez.</p>
            </motion.div>
        </div>
    );
};

export default Page;