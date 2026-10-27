"""A tiny runnable calculator students can extend."""

import argparse
from calc import add


def main():
    parser = argparse.ArgumentParser(description="Add two numbers.")
    parser.add_argument("first", type=float, nargs="?", default=2)
    parser.add_argument("second", type=float, nargs="?", default=3)
    args = parser.parse_args()
    print("Hello, Vibe Coding 101!")
    print(f"{args.first:g} + {args.second:g} = {add(args.first, args.second):g}")


if __name__ == "__main__":
    main()
