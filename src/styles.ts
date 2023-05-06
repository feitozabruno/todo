import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background: var(--gray-700);
  padding: 7.2rem 0 8rem 0;
`;

export const Container = styled.section`
  width: 100%;
  margin: 0 1rem;
  max-width: 72.6rem;
  margin: 0 auto;
  padding-inline: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.8rem;
  margin-top: -3rem;

  input[type="text"] {
    width: 100%;
    max-width: 63.8rem;
    height: 5.4rem;
    padding: 1rem;
    color: var(--gray-100);
    border: 1px solid var(--gray-700);
    background-color: var(--gray-500);
    border-radius: 8px;
  }

  button[type="submit"] {
    color: var(--gray-100);
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    background: var(--blue-dark);
    transition: background 0.2s;

    &:disabled {
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: var(--blue);
      cursor: pointer;
    }
  }
`;

export const NoTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem;
  border-top: 2px solid var(--gray-400);
  border-radius: 8px;

  svg {
    margin-top: 6.4rem;
  }

  strong {
    margin-top: 1.6rem;
  }

  strong,
  p {
    color: var(--gray-300);
  }
`;

export const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  margin-top: 6.4rem;
  margin-bottom: 2.4rem;

  span {
    font-size: 1.2rem;
    color: var(--gray-200);
    padding: 2px 8px;
    background: var(--gray-400);
    border-radius: 999px;
    margin-left: 8px;
  }

  strong:nth-child(1) {
    color: var(--blue);
  }

  strong:nth-child(2) {
    color: var(--purple);
  }
`;

export const TasksList = styled.ul`
  list-style: none;

  li + li {
    margin-top: 1.6rem;
  }

  li {
    display: flex;
    align-items: flex-start;
    padding: 1.6rem 0;

    background: var(--gray-500);
    border: 1px solid var(--gray-400);
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

    button {
      margin-inline: 1.6rem;
    }

    button:nth-child(1) {
      cursor: pointer;
      width: 21px;
      height: 21px;
      margin-right: 1.2rem;

      svg {
        fill: var(--blue);
        stroke: var(--blue);
        stroke-width: 5px;

        path:nth-child(1) {
          opacity: 0;
          transition: opacity 0.2s;

          &:hover {
            opacity: 0.2;
          }
        }
      }
    }

    button:nth-child(3) {
      cursor: pointer;
      color: var(--gray-300);
      width: 25px;
      height: 25px;
      padding: 5px;
      transition: background 0.2s;

      &:hover {
        background: var(--gray-400);
        color: var(--danger);
        border-radius: 4px;
      }
    }

    span {
      color: var(--gray-100);
      font-size: 1.4rem;
      width: calc(100% - 46px);
    }
  }

  li.task-complete {
    button:nth-child(1) svg {
      cursor: initial;
      fill: var(--purple-dark);
      stroke: var(--purple-dark);

      path:nth-child(1) {
        fill: var(--purple-dark);
        opacity: 0.2;
      }

      /* &:hover {
        fill: var(--purple);
        stroke: var(--purple);

        path:nth-child(1) {
          fill: var(--purple);
          opacity: 0.3;
        }
      } */
    }

    span {
      color: var(--gray-300);
      text-decoration: line-through;
    }
  }
`;
