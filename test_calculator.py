import unittest
from calculator import moyenne


class TestCalculator(unittest.TestCase):
    
    def test_moyenne_liste_simple(self):
        """Test de la moyenne avec une liste simple de nombres"""
        self.assertEqual(moyenne([1, 2, 3, 4, 5]), 3)
    
    def test_moyenne_deux_nombres(self):
        """Test de la moyenne avec deux nombres"""
        self.assertEqual(moyenne([10, 20]), 15)
    
    def test_moyenne_un_nombre(self):
        """Test de la moyenne avec un seul nombre"""
        self.assertEqual(moyenne([5]), 5)
    
    def test_moyenne_nombres_negatifs(self):
        """Test de la moyenne avec des nombres négatifs"""
        self.assertEqual(moyenne([-5, -10, -15]), -10)
    
    def test_moyenne_nombres_decimaux(self):
        """Test de la moyenne avec des nombres décimaux"""
        self.assertAlmostEqual(moyenne([1.5, 2.5, 3.5]), 2.5)
    
    def test_moyenne_liste_vide(self):
        """Test de la moyenne avec une liste vide"""
        self.assertEqual(moyenne([]), 0)
    
    def test_moyenne_nombres_mixtes(self):
        """Test de la moyenne avec des nombres positifs et négatifs"""
        self.assertEqual(moyenne([-10, 0, 10]), 0)


if __name__ == '__main__':
    unittest.main()
