from seller_analysis import analyze_sellers

# Analyze sellers and export to CSV
try:
    analyze_sellers('data.csv', 'seller_analysis.csv')
except Exception as e:
    print(f"An error occurred: {e}")