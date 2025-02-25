import { IKnowledgeBaseItem } from "../types.ts";
import { transitionToElement } from "./appWrapperScripts.ts";

export const getKnowledgeItemsCollection = (): IKnowledgeBaseItem[] => {
    return ([
        {
            id: 1,
            title: "Фосфін",
            text: `
                <span class="span-font-weight-bold">Фосфін</span> (<span class="span-italic">фосфористий водень</span>, 
                <span class="span-uppercase">РН<sub>3</sub></span>) — це безбарвний, токсичний газ із характерним 
                запахомгнилої риби або часнику. Використовується як ефективний <span class="span-color-secondary">фумігант</span> для боротьби зі шкідниками у закритих приміщеннях.
                <br><br>
                <span class="span-font-weight-bold">Застосування фосфіну:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Обробка зерносховищ та складів</li>
                    <li>Фумігація контейнерів з вантажами</li>
                    <li>Знищення комах-шкідників у зернових культурах</li>
                </ul>
                <br>
                <span class="span-font-weight-bold">Переваги фосфіну:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Висока ефективність проти широкого спектра шкідників</li>
                    <li>Не залишає токсичних залишків у продуктах</li>
                    <li>Проникає у важкодоступні місця</li>
                </ul>
            ` 
        },
        {
            id: 2,
            title: "Фумігація",
            text: `
                <span class="span-font-weight-bold">Фумігація</span> (від лат. <span class="span-italic">fumigatio</span> — окурювання) — 
                метод боротьби з шкідниками зерна та зернопродуктів, 
                а також збудниками хвороб рослин грибкового або бактеріального походження.
                Фумігація здійснюється за допомогою токсичних парів, газів, диму та аерозолів, які виділяються спеціальними речовинами — 
                <span class="span-color-secondary">фумігантами</span>.
                Фумігація створює навколо об’єкта отруйне середовище, що сприяє знищенню шкідників.<br>
                <br>
                <span class="span-font-weight-bold">Фумігацію проводять:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Під укриттями з брезенту або плівкових матеріалів</li>
                    <li>У спеціальних камерах (вакуумним або безвакуумним методом)</li>
                    <li>У герметизованих трюмах суден</li>
                    <li>У ямах тощо</li>
                </ul>
                <br>
                <span class="span-font-weight-bold">Методи фумігації:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Газові фуміганти — заповнюють простір, поступаючи до об'єкта через спеціальні пристрої</li>
                    <li>Окурювання димом — здійснюється спалюванням фумігантів у спеціальних пристроях або за допомогою димових шашок</li>
                </ul>
                <br>
                <span class="span-font-weight-bold">Фумігації підлягають:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Складські приміщення, теплиці, елеватори, транспортні засоби</li>
                    <li>Рослинна продукція (зерно, фрукти, овочі, насіння, посадковий матеріал)</li>
                    <li>Вегетуючі рослини (виноградники, цитрусові дерева)</li>
                    <li>Ґрунт та нори гризунів</li>
                </ul>
            ` 
        },
        {
            id: 3,
            title: "Обладнання для фумігації",
            text: `
                <span class="span-font-weight-bold">Обладнання для фумігації:</span><br>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Генератори гарячого та холодного туману — розпилюють фуміганти у вигляді аерозолю.</li>
                    <li>Газоаналізатори — контролюють рівень концентрації речовин у повітрі.</li>
                    <li>Камери для фумігації — спеціальні ізольовані приміщення для обробки продукції.</li>
                    <li>Димові шашки — використовуються для обкурювання закритих приміщень.</li>
                </ul>
            `
        },
        {
            id: 4,
            title: "Газація",
            text: `
                <span class="span-font-weight-bold">Газація</span> — це <span class="span-color-secondary">дезінфекція</span> приміщень, 
                рослин (на корені), харчових продуктів, насіння, посадкового матеріалу, ґрунту тощо за допомогою газоподібних або пароподібних 
                хімічних речовин. Використовується для обкурювання приміщень, складів, ангарів перед завантаженням зерновими.<br>
                <br>
                <span class="span-font-weight-bold">Види газації:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Гарячий туман — розпилення високотемпературних аерозолів (<span class="span-italic">5 - 50 мікрон</span>) за допомогою генераторів туману</li>
                    <li>Холодний туман — розпилення аерозолів кімнатної температури (<span class="span-italic">100 - 150 мікрон</span>) за допомогою генераторів туману</li>
                </ul>
                <br>
                <span class="span-font-weight-bold">Переваги газації:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Ефективність проти широкого спектра збудників</li>
                    <li>Швидке очищення приміщень</li>
                    <li>Можливість використання в аграрному секторі</li>
                </ul>
            `    
        },
        {
            id: 5,
            title: "Дезінсекція",
            text: `
                <span class="span-font-weight-bold">Дезінсекція</span> (від франц. <span class="span-italic">des</span> — видалення та лат. 
                <span class="span-italic">insectum</span> — комаха) — комплекс заходів із боротьби з <span class="span-color-secondary">
                шкідливими комахами та кліщами</span>.<br>
                <br>
                <span class="span-font-weight-bold">Дезінсекцію проводять для знищення:</span>

                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Шкідників сільськогосподарських рослин</li>
                    <li>Комах, що шкодять запасам зерна, харчових продуктів, фуражних кормів</li>
                    <li>Паразитів у складських приміщеннях</li>
                </ul>
                <br>
                <span class="span-font-weight-bold">Види дезінсекції:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Механічна — використання зерноочисних машин, видалення заражених продуктів</li>
                    <li>Фізична — застосування струмів високої частоти, гамма-випромінювання</li>
                    <li>Біологічна — використання мікробіопрепаратів для боротьби зі шкідниками</li>
                    <li>Хімічна — використання інсектицидів для обробки зерна, складських приміщень, посівного матеріалу</li>
                </ul>
            ` 
        },
        {
            id: 6,
            title: "Дератизація",
            text: `
                <span class="span-font-weight-bold">Дератизація</span> — комплекс заходів, спрямованих на <span class="span-color-secondary">знищення та профілактику</span> появи гризунів.<br><br>
                <span class="span-font-weight-bold">Методи дератизації:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Механічний — пастки, капкани, відловлювання</li>
                    <li>Біологічний — використання природних ворогів (кішки, хижаки)</li>
                    <li>Хімічний — застосування родентицидів (отрут)</li>
                    <li>Електронний — відлякувачі ультразвукового типу</li>
                </ul>
            `
        },
        {
            id: 7,
            title: "Дезінфекція",
            text: `
                <span class="span-font-weight-bold">Дезінфекція</span> — процес <span class="span-color-secondary">знищення</span> збудників інфекційних хвороб та шкідливих мікроорганізмів.<br><br>
                <span class="span-font-weight-bold">Основні методи дезінфекції:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Фізичний — використання високих температур (пар, кип’ятіння, ультрафіолет)</li>
                    <li>Хімічний — обробка дезінфікуючими розчинами</li>
                    <li>Комбінований — поєднання фізичних і хімічних методів</li>
                </ul>
            `
        },
        {
            id: 8,
            title: "Регламенти та норми",
            text: `
                <span class="span-font-weight-bold">Регламенти та норми</span> фумігаційних робіт регулюються законодавством 
                <span class="span-color-secondary">України</span> та міжнародними стандартами.<br><br>
                <span class="span-font-weight-bold">Основні нормативні документи:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Державні санітарні правила та норми</li>
                    <li>Міжнародні фітосанітарні вимоги</li>
                    <li>Правила транспортування та зберігання хімічних засобів</li>
                </ul>
            `
        },
        {
            id: 9,
            title: "Часті питання",
            text: `
                <span class="span-font-weight-bold">❓ Чи безпечна фумігація?</span><br>
                ✅ Так, за умови дотримання всіх правил та норм безпеки.<br><br>
                <span class="span-font-weight-bold">❓ Скільки часу триває обробка?</span><br>
                ✅ Залежить від об'єкта та типу фумігації (від кількох годин до кількох днів).<br><br>
                <span class="span-font-weight-bold">❓ Чи можна перебувати в приміщенні після фумігації?</span><br>
                ✅ Ні, необхідно витримати час провітрювання та перевірку рівня залишкових речовин.<br>
            `
        },
        
    ]);
}

export const handleHashChange = () => {
    setTimeout(() => {
        const hash = window.location.hash;
        
        if (hash) {
            const section = document.getElementById(hash);
            
            if (section) {
                transitionToElement(section, "start");
            }
        }
    }, 250);
};