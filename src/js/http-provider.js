

const urlUsuarios = 'https://reqres.in/api/users?page=2';



export const obtenerUsuarios = async () => {

    const resp = await fetch(urlUsuarios);

    const { data:usuarios } = await resp.json();

    return usuarios;

}
