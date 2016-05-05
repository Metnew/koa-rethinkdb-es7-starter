import Users from '../models/Users';


async function auth() {
    console.log(arguments)
}

let UsersApi = {
    get: {
        "/users": async (ctx, next) => {
            ctx.body = await Users.getAll(ctx.db)
        },

        "/users/:id": async (ctx, next) => {
            ctx.body = await Users.get(ctx.params.id, ctx.db);
        }
    },

    post: {
        "/users": async(ctx, next) => {
            ctx.body = await Users.add(ctx.request.body, ctx.db);
        }
    },

    put: {
        "/users": async(ctx, next) => {
            ctx.body = await Users.update(ctx.request.body, ctx.db);
        }
    },

    del: {
        "/users/:id": async(ctx, next) => {
            ctx.body = await Users.delete(ctx.params.id, ctx.db)
        }
    }
}


export default UsersApi;
