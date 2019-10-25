import jwt from 'jsonwebtoken';

// Transforma uma função de callback em async/await
import { promisify } from 'util';

// Buscar o secret do token para ver se ele é válido
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  // Buscar o token do usuário
  const authHeader = req.headers.authorization;

  // Se o middlware não tiver presente
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided.' });
  }

  // Dividir o header = Bearer / Token
  const [, token] = authHeader.split(' ');

  try {
    // Valor do jwt retornado do verify()
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // Inclui o id do usuário no req
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid.' });
  }

  return next();
};
