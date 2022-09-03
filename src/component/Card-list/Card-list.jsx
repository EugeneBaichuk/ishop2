import { useState } from "react";
import { cardListArr } from "./Card-list-arr";
import ShopCard from "../Card-item";

export const CardList = () => {
    const [cards, setCards] = useState(cardListArr);

    const makeActive = (id) => (_e) => {
        // setCards(prevState => prevState.map(item => {
        //     if (item.id === id) {
        //         return ({...item, active: !item.active})
        //     }
        //     return ({...item, active: false})
        // }))

        // Переделал так после последнего занятия. Чем этот вариант лучше чем закомментированный? 
        //зачем тогда в useState колбэки, если мы всю работу с состоянием выносим наружу??
        const activeCard = cards.map(item => {
            if (item.id === id) {
                return ({...item, active: !item.active})
            }
            return ({...item, active: false})
        });
        setCards(prevState => activeCard)
    }

    const deleteCard = (id) => (e) => {
        e.stopPropagation();
        const accepted = window.confirm("Вы действительно хотите удалить карточку?");
        const filteredState = cards.filter(item => (item.id !== id));
        setCards(prevState => accepted ? filteredState : prevState);
    }

    return cards.map(item => {
        return <ShopCard key={item.id} deleteCard={deleteCard} makeActive={makeActive} {...item}/>
    })
}