import random
import threading
import time

def generate_coupon_code(length=8):
    """
    Generate a random coupon code.

    Parameters:
    - length (int): Length of the coupon code.

    Returns:
    - str: Random coupon code.
    """
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    coupon_code = ''.join(random.choice(characters) for i in range(length))
    return coupon_code

def display_coupon_with_expiration():
    # Generate a random coupon code
    coupon_code = generate_coupon_code()

    # Display the coupon code
    print(f"Your Coupon Code: {coupon_code}")

    # Display expiration dynamically for 2 seconds
    for seconds in range(10, 0, -1):
        print(f"Expires in {seconds} seconds...", end='\r')
        time.sleep(1)

    print("\nCoupon expired!")

if __name__ == "__main__":
    # Start a thread for dynamic expiration display
    expiration_thread = threading.Thread(target=display_coupon_with_expiration)
    expiration_thread.start()

    # Perform other tasks while expiration is being displayed
    print("Performing other tasks...")

    # Wait for the expiration thread to finish
    expiration_thread.join()

    # Continue with the rest of the program
    print("Coupon generation completed.")
