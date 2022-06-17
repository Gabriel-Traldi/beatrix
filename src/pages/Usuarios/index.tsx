import React from 'react';

import { useNavigate } from 'react-router-dom';
import { PlusOutlined, MoreOutlined } from '@ant-design/icons';

import {
  Usuarios1,
  PageHeader6,
  Header9,
  Usuarios,
  Actions3,
  ButtonNewUser,
  Body14,
  Checkbox13Row1Column01,
  CheckboxInactiveDefault9,
  Content34Row1Column11,
  ActionsButton5,
  TagStatus14Row1Column81,
  Success4,
  Checkbox14Row2Column01,
  CheckboxInactiveDefault10,
  Content35Row2Column11,
  ActionsButton6,
  TagStatus15Row2Column81,
  Default4,
  ColumnUsuariosTable,
  UsuariosTable,
} from './styles';

const UsuariosPage = () => {
  let navigate = useNavigate();
  const dataSourceUsuariosTable = [
    {
      key: '0',
      checkbox30: [
        <Checkbox13Row1Column01>
          <CheckboxInactiveDefault9 />
        </Checkbox13Row1Column01>,
      ],
      title1: [
        <Content34Row1Column11>
          <ActionsButton5 type="text" icon={<MoreOutlined />} size="small" />
        </Content34Row1Column11>,
      ],
      title1142: 'Alan Santos',
      title1153: 'asantos',
      title1164: 'BR01',
      title1175: 'ADM',
      title1186: 'Gerente',
      title1197: 'ADM LVL3',
      status128: [
        <TagStatus14Row1Column81>
          <Success4>Ativo</Success4>
        </TagStatus14Row1Column81>,
      ],
    },
    {
      key: '1',
      checkbox30: [
        <Checkbox14Row2Column01>
          <CheckboxInactiveDefault10 />
        </Checkbox14Row2Column01>,
      ],
      title1: [
        <Content35Row2Column11>
          <ActionsButton6 type="text" icon={<MoreOutlined />} size="small" />
        </Content35Row2Column11>,
      ],
      title1142: 'Alessandra Matos',
      title1153: 'amatos',
      title1164: 'BR01',
      title1175: 'PROD',
      title1186: 'Prestador',
      title1197: 'CQ LVL1',
      status128: [
        <TagStatus15Row2Column81>
          <Default4>Inativo</Default4>
        </TagStatus15Row2Column81>,
      ],
    },
  ];

  const navigateToNovoUsuario = () => {
    navigate('/landing-page/novo-usuario');
  };

  return (
    <Usuarios1>
      <PageHeader6>
        <Header9>
          <Usuarios>Usuários</Usuarios>
          <Actions3>
            <ButtonNewUser
              onClick={navigateToNovoUsuario}
              type="default"
              icon={<PlusOutlined />}
            >
              Novo Usuário
            </ButtonNewUser>
          </Actions3>
        </Header9>
      </PageHeader6>
      <Body14>
        <UsuariosTable dataSource={dataSourceUsuariosTable}>
          <ColumnUsuariosTable
            title=""
            dataIndex="checkbox30"
            key="checkbox30"
            align="center"
            width="48px"
          />
          <ColumnUsuariosTable
            title="Title"
            dataIndex="title1"
            key="title1"
            align="center"
            width="56px"
          />
          <ColumnUsuariosTable
            title="Nome"
            dataIndex="title1142"
            key="title1142"
            align="left"
            filters={[
              { text: 'Alan Santos', value: 'Alan Santos' },
              { text: 'Alessandra Matos', value: 'Alessandra Matos' },
            ]}
            width="381px"
            onFilter={(value, record: any) =>
              record.title1142.indexOf(value) === 0
            }
          />
          <ColumnUsuariosTable
            title="Usuário"
            dataIndex="title1153"
            key="title1153"
            align="left"
            filters={[
              { text: 'asantos', value: 'asantos' },
              { text: 'amatos', value: 'amatos' },
            ]}
            width="101px"
            onFilter={(value, record: any) =>
              record.title1153.indexOf(value) === 0
            }
          />
          <ColumnUsuariosTable
            title="Planta"
            dataIndex="title1164"
            key="title1164"
            align="left"
            filters={[{ text: 'BR01', value: 'BR01' }]}
            width="93px"
            onFilter={(value, record: any) =>
              record.title1164.indexOf(value) === 0
            }
          />
          <ColumnUsuariosTable
            title="Área"
            dataIndex="title1175"
            key="title1175"
            align="left"
            filters={[
              { text: 'ADM', value: 'ADM' },
              { text: 'PROD', value: 'PROD' },
            ]}
            width="82px"
            onFilter={(value, record: any) =>
              record.title1175.indexOf(value) === 0
            }
          />
          <ColumnUsuariosTable
            title="Cargo"
            dataIndex="title1186"
            key="title1186"
            align="left"
            filters={[
              { text: 'Gerente', value: 'Gerente' },
              { text: 'Prestador', value: 'Prestador' },
            ]}
            width="381px"
            onFilter={(value, record: any) =>
              record.title1186.indexOf(value) === 0
            }
          />
          <ColumnUsuariosTable
            title="Permissões"
            dataIndex="title1197"
            key="title1197"
            align="left"
            filters={[
              { text: 'ADM LVL3', value: 'ADM LVL3' },
              { text: 'CQ LVL1', value: 'CQ LVL1' },
            ]}
            width="381px"
            onFilter={(value, record: any) =>
              record.title1197.indexOf(value) === 0
            }
          />
          <ColumnUsuariosTable
            title="Status"
            dataIndex="status128"
            key="status128"
            align="left"
            width="93px"
          />
        </UsuariosTable>
      </Body14>
    </Usuarios1>
  );
};

export default UsuariosPage;
