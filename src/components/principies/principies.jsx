import ItemList from '../itemList/itemList';
import Diamond from '../../assets/diamond.svg';
import Fire from '../../assets/fire.svg';
import Flag from '../../assets/flag.svg';
import Student from '../../assets/student.svg';

const Principies = () => {
    const itemsPrincipies = [
        { id: 1, img: `${Diamond}`, hover_fade: true, title: 'Создавай ценность для клиента', text: 'Клиент должен получать больше, чем ожидает. Это наша главная цель и основа для процветания.' },
        { id: 2, img: `${Fire}`, hover_fade: true, title: 'Внедряй инновации', text: 'Мир не стоит на месте, и мы тоже не должны. Постоянно ищи новые возможности, экспериментируй, тестируй гипотезы и не бойся рисковать. Инновации - это кислород для нашего развития.' },
        { id: 3, img: `${Flag}`, hover_fade: true, title: 'Достигай успеха с командой', text: 'Мы сильны вместе. Уважай мнение каждого, делись своими знаниями и помогай другим. Только работая как единая команда, мы сможем достичь общих целей и добиться выдающихся результатов.'},
        { id: 4, img: `${Student}`, hover_fade: true, title: 'Будь профессиональ\xADным лидером', text: 'Профессиональный лидер - это двигатель прогресса.'}
    ];

    return (
        <div className="t-vetrical">
            <h2 className="title-2">Принципы, по которым мы живём</h2>
            <div className="t-vertical-small">
                <ItemList items={itemsPrincipies} hasCol3={true}/>
            </div>
        </div>
    );
};

export default Principies;

