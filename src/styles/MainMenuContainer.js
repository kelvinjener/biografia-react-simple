import styled from 'styled-components';

export const MainMenuContainer = styled.nav`
    ul {
        list-style: none;
        padding: 0;

        li {
            display: inline-block;
            margin-right: 25px;

            a{
                color: white;
                text-decoration: none;
            }

            a:hover{
                text-decoration: underline;
            }
        }
    }
`