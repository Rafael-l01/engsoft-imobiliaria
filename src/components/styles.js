import styled, { css } from "styled-components";

const btn = (light, dark) => css`
    white-space: nowrap;
    display: inline-block;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 16px;
    color: white;
    &:visited {
        color: white;
    }
    background-image: linear-gradient(${light}, ${dark});
    border: 1px solid ${dark};
    &:hover {
        background-image: linear-gradient(${light}, ${dark});
        &[disabled] {
            background-image: linear-gradient(${light}, ${dark});
        }
    }
    &:visited {
        color: black;
    }
    &[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const btnDefault = css`
    ${btn("#ffffff", "#d5d5d5")} color: #555;
`;

const btnPrimary = btn("#65eba1", "#285f8f");

export default styled.div`
    padding:0px;
    margin:0px; 
    font-family: sans-serif;
    h1 {
        text-align: center;
        background-color: transparent;
    }

    h2 {
        text-align: center;
        font-size: 22px;
        color: #222;
    }

    & > div {
        text-align: center;
        width: 100%;
    }

    & > a {
        display: block;
        text-align: center;
        color: #222;
        margin-bottom: 10px;
    }

    form {
        max-width: 500px;
        margin: 10px auto;
        border: 1px solid #ccc;
        padding: 20px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        position: relative;

        & > .buttons {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            margin-top: 15px;
        }
        button {
            margin: 0 10px;
            opacity: 0.3;
            transition: 1s;
            &[type="submit"] {
                ${btnPrimary};
            }
            &[type="button"] {
                ${btnDefault};
            }
            &:hover {
                cursor: pointer;
                opacity: 1;
                transition: 1s;
            }
        }

        .error {
            display: flex;
            font-weight: bold;
            color: #800;
            flex-flow: row nowrap;
            justify-content: center;
        }

        pre {
            border: 1px solid #ccc;
            background: rgba(0, 0, 0, 0.1);
            box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
            padding: 20px;
        }
    }
`;