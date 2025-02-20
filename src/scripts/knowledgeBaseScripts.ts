import { IKnowledgeBaseItem } from "../types";

export const getKnowledgeItemsCollection = (): IKnowledgeBaseItem[] => {
    return ([
        {
            id: 1,
            title: "Фумігація",
            text: `
                <span class="span-font-weight-bold">Фумігація</span> (від лат. <span class="span-italic">fumigatio</span> — окурювання) — 
                метод боротьби з <span class="span-color-secondary">сільськогосподарськими шкідниками</span>, шкідниками зерна та зернопродуктів, 
                а також збудниками хвороб рослин грибкового або бактеріального походження.
                Фумігація здійснюється за допомогою токсичних парів, газів, диму та аерозолів, які виділяються спеціальними речовинами — 
                <span class="span-font-weight-bold">фумігантами</span>.
                Фумігація створює навколо об’єкта <span class="span-color-secondary">отруйне середовище</span>, що сприяє знищенню шкідників.<br>
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
            id: 2,
            title: "Фосфін",
            text: `
                <span class="span-font-weight-bold">Фосфін</span> (<span class="span-italic">фосфористий водень</span>, 
                <span class="span-uppercase">РН<sub>3</sub></span>) — це безбарвний, токсичний газ із характерним 
                запахомгнилої риби або часнику.
            ` 
        },
        {
            id: 3,
            title: "Газація",
            text: `
                <span class="span-font-weight-bold">Газація</span> — це <span class="span-color-secondary span-font-weight-bold">дезінфекція</span> приміщень, 
                рослин (на корені), харчових продуктів, насіння, посадкового матеріалу, ґрунту тощо за допомогою газоподібних або пароподібних 
                хімічних речовин.
            `    
        },
        {
            id: 4,
            title: "Дезінсекція",
            text: `
                <span class="span-font-weight-bold">Дезінсекція</span> (від франц. <span class="span-italic">des-</span> — видалення та лат. 
                <span class="span-italic">insectum</span> — комаха) — комплекс заходів із боротьби з <span class="span-color-secondary">
                шкідливими комахами та кліщами</span>.<br>
                <br>
                <span class="span-font-weight-bold">Дезінсекцію проводять для знищення:</span>

                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Шкідників сільськогосподарських рослин</li>
                    <li>Комах, що шкодять запасам зерна, харчових продуктів, фуражних кормів</li>
                    <li>Паразитів у складських приміщеннях</li>
                </ul>
            ` 
        },
        {
            id: 5,
            title: "Методи дезінсекції",
            text: `
                <span class="span-font-weight-bold">Види дезінсекції:</span>

                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                    <li>Механічна — використання зерноочисних машин, видалення заражених продуктів</li>
                    <li>Фізична — застосування струмів високої частоти, гамма-випромінювання</li>
                    <li>Біологічна — використання мікробіопрепаратів для боротьби зі шкідниками</li>
                    <li>Хімічна — використання інсектицидів для обробки зерна, складських приміщень, посівного матеріалу</li>
                </ul>
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
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, 0);
};