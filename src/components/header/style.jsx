import styled from "styled-components";

export const Header = styled.header`
        display: flex;
        height: 80px;
        padding: 10px;
        align-items: center;
        justify-content: space-between;
        transition: 0.3s ease-in;
        background: ${props => props.theme.headerBackground};
        color: ${props => props.theme.color};

    
`;
export const Img = styled.img`
        width: 150px;
        height: 50px;
        filter: drop-shadow(15px 10px 4px #232323);
`;

export const ImgNav = styled.img`
        width: 150px;
        height: 50px;
        transition: 0.3s ease-in;
        filter: drop-shadow(10px 8px 5px #232323);

        &:hover{
                transform: scale(1.05);
                filter: drop-shadow(10px 10px 4px rgb(182, 182, 182));
        }
`;

export const EnterCart = styled.div`
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        svg{
                font-size: 26px;
                color: orange;
                position: relative;
        }

        p{
                position: absolute;
                top: 9px;
                font-size: 14px;
                background-color: #fff;
                font-weight: 700;
                border-radius: 50%;
                padding: 0 6px ;
                color: #fe1a1a;
        }
`;


export const ThemeContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 30%;

        @media (max-width: 425px) {
                gap: 10px;
                width: 40%;
        }
`;

export const Button = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px ;
        background: transparent;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: 600;
        width: 100px;

        @media (max-width: 425px) {
                width: 70px;
        }

        img{ 
                border-radius: 50% ;
                width: 30%;
                animation: rotat 3s linear infinite ;
                filter: drop-shadow(0 0 2px red );

                @keyframes rotat {
                        to{
                                transform: rotateZ(360deg);
                        }
                }
        }
`;
