import {createSlice, current} from "@reduxjs/toolkit";
import combo1 from "../components/img/combo1.svg";
import combo2 from "../components/img/combo2.svg";
import combo3 from "../components/img/combo3.svg";
import combo4 from "../components/img/combo4.svg";
import gift1 from "../components/img/gift1.svg";
import morning from "../components/img/morning.svg";
import origin from "../components/img/origin.svg";
import everyday from "../components/img/everyday.svg";
import revo from "../components/img/revo.svg";
import honey from "../components/img/honey.svg";
import natural from "../components/img/natural.svg";
// import {addToBasket, removeFromBasket, showOrHideBasket, showOrHideInfo} from "./app-reducer";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        isInfoShowed: false,
        isBasketShowed: false,
        currentCard: {},
        basketCounter: 0,
        basket: [],
        cards: [
            {
                id: 1,
                type: 'gift',
                image: gift1,
                price: '285.000',
                title: 'Giftset "Cà phê phin Việt Nam"',
                description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                    '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                    '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                    '                    cho bạn.',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 2,
                type: 'gift',
                image: gift1,
                price: '285.000',
                title: '2 Giftset "Cà phê phin Việt Nam"',
                description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                    '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                    '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                    '                    cho bạn.',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 3,
                type: 'gift',
                image: gift1,
                price: '285.000',
                title: '3 Giftset "Cà phê phin Việt Nam"',
                description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                    '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                    '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                    '                    cho bạn.',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 4,
                type: 'coffee',
                image: morning,
                price: '99.000',
                title: 'REVO Morning',
                description: 'đắng, hậu ngọt, hương hoa ',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 5,
                type: 'coffee',
                image: origin,
                price: '139.000',
                title: 'REVO Origin',
                description: 'hậu ngọt, ít đắng, vị chua dâu',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 6,
                type: 'coffee',
                image: everyday,
                price: '85.000',
                title: 'REVO Everyday',
                description: 'cân bằng, hậu đắng, vị chocolate ',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 7,
                type: 'coffee',
                image: revo,
                price: '75.000',
                title: 'REVO Đậm Đà',
                description: 'đậm đà, đắng, truyền thống',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 8,
                type: 'coffee',
                image: honey,
                price: '195.000',
                title: 'REVO Honey',
                description: 'độ ngọt cao, hậu ngọt, chua họ táo',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 9,
                type: 'coffee',
                image: natural,
                price: '169.000',
                title: 'REVO Natural',
                description: 'hậu ngọt, hương hoa, vị chua dâu',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 10,
                type: 'combo',
                image: combo1,
                price: '147.000',
                lastPrice: '155.000',
                title: 'Combo Revo Đậm Đà',
                description: 'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...',
                shortDescription: 'Revo Đậm Đà đủ mạnh',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 11,
                type: 'combo',
                image: combo2,
                price: '156.000',
                lastPrice: '165.000',
                title: 'Combo Revo Everyday',
                description: 'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...',
                shortDescription: 'Revo Đậm Đà đủ mạnh',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 12,
                type: 'combo',
                image: combo3,
                price: '275.000',
                lastPrice: '280.000',
                title: 'Combo Revo Honey',
                description: 'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...',
                shortDescription: 'Revo Đậm Đà đủ mạnh',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
            {
                id: 13,
                type: 'combo',
                image: combo4,
                price: '249.000',
                lastPrice: '276.000',
                title: 'Combo Revo Honey',
                description: 'Revo Natural là dòng cà phê đặc biệt của Revo Coffee dành riêng ...',
                shortDescription: 'Revo Đậm Đà đủ mạnh',
                beansTitle: 'Loại hạt',
                beansInfo: 'Fine Robusta Blend',
                placeTitle: 'Độ cao',
                placeInfo: '700 - 800m'
            },
        ]
    },
    reducers: {
        showOrHideInfo(state, action) {
            state.isInfoShowed = !state.isInfoShowed
            state.currentCard = action.payload
            console.log(current(state))
        },
        showOrHideBasket(state) {
            state.isBasketShowed = !state.isBasketShowed
            console.log(current(state))
        },
        addToBasket(state, action) {
            state.basket.push(action.payload)
            state.basketCounter++

            // console.log(state.basketCounter)
            console.log(current(state))
        },
        removeFromBasket(state, action) {
            state.basketCounter--
            //убрать карточку из массива корзины

            state.basket.filter(item => !action.payload)
            console.log(state.basketCounter)
            console.log(current(state))
        }
    }
})

export default toolkitSlice.reducer

export const {showOrHideInfo, addToBasket, removeFromBasket, showOrHideBasket} = toolkitSlice.actions