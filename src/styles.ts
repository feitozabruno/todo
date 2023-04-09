import styled from "styled-components";

export const StylesContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20rem;
    background-color: var(--gray-700);
  }

  form {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    margin-top: -2.7rem;
    padding-inline: 1rem;

    input[type="text"] {
      width: 63.8rem;
      height: 5.4rem;
      padding: 1.6rem;
      line-height: 1.2;
      color: var(--gray-100);
      background-color: var(--gray-500);
      border: 1px solid var(--gray-700);
      border-radius: 8px;
      resize: none;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 1.6rem;
      color: var(--gray-100);
      background-color: var(--blue-dark);
      border-radius: 8px;
      cursor: pointer;
      transition: 0.1s background-color;

      &:not([disabled]):hover {
        background-color: var(--blue);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }

  ul {
    margin: 0 auto;
    width: 73.6rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.4rem;
      padding-block: 6.4rem 2.4rem;

      h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        &:nth-child(1) {
          color: var(--blue);
        }

        &:nth-child(2) {
          color: var(--purple);
        }
      }

      span {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--gray-200);
        padding: 2px 8px;
        background-color: var(--gray-400);
        border-radius: 999px;
      }
    }

    li {
      display: flex;
      align-items: flex-start;
      justify-content: left;
      gap: 1.5rem;

      font-size: 1.4rem;
      line-height: 1.4;

      padding: 1.6rem;
      border-radius: 8px;
      background-color: var(--gray-500);

      span {
        color: var(--gray-100);
        width: 63.2rem;

        &.completed {
          color: var(--gray-300);
          text-decoration: line-through;
        }
      }

      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:nth-child(1) {
          color: var(--blue);
        }

        &:nth-child(3) {
          color: var(--gray-300);
          transition: color 0.2s;

          &:hover {
            color: var(--danger);
          }
        }
      }
    }
  }

  div.NoTasks {
    margin: 0 auto;
    padding-block: 6.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;

    color: var(--gray-300);
    line-height: 1.4;
  }
`;
