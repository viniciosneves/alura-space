import { styled } from "styled-components";

import tags from './tags.json'

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Form = styled.form`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = ({ setTag }) => {
    return (
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Form>
                {tags.map(tag => <Tag type="button" key={tag.id} onClick={() => setTag(tag.id)}>{tag.titulo}</Tag>)}
            </Form>
        </TagsContainer>
    )
}

export default Tags