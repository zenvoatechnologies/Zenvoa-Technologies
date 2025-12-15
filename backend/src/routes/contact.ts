import { Router } from 'express';
import { createContact, getAllContacts } from '../controllers/contactController';

const router = Router();

// POST /api/contact - Create new contact submission
router.post('/', createContact);

// GET /api/contact - Get all contacts (for admin)
router.get('/', getAllContacts);

export default router;
