//rota para logout 

export async function POST() {
    // remove o token do lado do cliente
    return new Response(JSON.stringify(
        {success: true},{status: 204}
    ));
}