#!/usr/bin/env python3
"""
Script pour convertir un PDF en PNG avec transparence
"""
import sys
import os

try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("Installation des bibliothèques nécessaires...")
    os.system("pip install pdf2image pillow")
    try:
        from pdf2image import convert_from_path
        from PIL import Image
    except ImportError:
        print("ERREUR: Impossible d'installer les bibliothèques automatiquement.")
        print("Veuillez exécuter manuellement: pip install pdf2image pillow")
        sys.exit(1)

def convert_pdf_to_png(pdf_path, output_path):
    """Convertit la première page d'un PDF en PNG avec transparence"""
    try:
        # Convertir le PDF en images (première page)
        images = convert_from_path(pdf_path, dpi=300, first_page=1, last_page=1)
        
        if not images:
            print("ERREUR: Aucune image n'a pu être extraite du PDF")
            return False
        
        # Prendre la première image
        img = images[0]
        
        # Convertir en RGBA pour supporter la transparence
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Créer un masque pour rendre le fond blanc transparent
        data = img.getdata()
        new_data = []
        for item in data:
            # Si le pixel est blanc ou presque blanc, le rendre transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((255, 255, 255, 0))  # Transparent
            else:
                new_data.append(item)
        
        img.putdata(new_data)
        
        # Sauvegarder en PNG
        img.save(output_path, 'PNG', optimize=True)
        print(f"✓ Conversion réussie: {output_path}")
        return True
        
    except Exception as e:
        print(f"ERREUR lors de la conversion: {e}")
        return False

if __name__ == "__main__":
    pdf_file = r"C:\Users\MartinCarrier\Applications\sitewebTelecom\bz telecom logo complet.pdf"
    output_file = r"C:\Users\MartinCarrier\Applications\sitewebTelecom\public\logo.png"
    
    if not os.path.exists(pdf_file):
        print(f"ERREUR: Le fichier PDF n'existe pas: {pdf_file}")
        sys.exit(1)
    
    print(f"Conversion de {pdf_file} en {output_file}...")
    success = convert_pdf_to_png(pdf_file, output_file)
    
    if success:
        print("Conversion terminée avec succès!")
    else:
        print("La conversion a échoué.")
        sys.exit(1)

